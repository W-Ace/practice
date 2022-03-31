const STATUS_MAP = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const STATE = Symbol('state');
const HANDLER = Symbol('handler');
const QUEUE = Symbol('queue');
const VALUE = Symbol('value');

class Promise {
  constructor(executor) {
    this[STATE] = STATUS_MAP.PENDING;
    this[HANDLER] = {
      onFulfilled: undefined,
      onRejected: undefined,
    };
    this[QUEUE] = [];
    this[VALUE] = undefined;

    this.tryfunction(executor);
  }

  static resolve(value) {
    return new Promise((resolve) => {
      resolve(value);
    });
  }

  static reject(reason) {
    return new Promise((_, reject) => {
      reject(reason);
    });
  }

  tryfunction(executor) {
    const resolve = (value) => {
      this.transition(STATUS_MAP.FULFILLED, value);
    };

    const reject = (reason) => {
      this.transition(STATUS_MAP.REJECTED, reason);
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  transition(state, value) {
    if (this[STATE] === state || this[STATE] !== STATUS_MAP.PENDING) return;
    this[STATE] = state;
    this[VALUE] = value;
    this.run();
  }

  then(onFulfilled, onRejected) {
    const thenablePromise = new Promise((resolve, reject) => {
      if (this[STATE] === STATUS_MAP.FULFILLED && typeof onFulfilled !== 'function') {
        resolve(this[VALUE]);
      } else if (this[STATE] === STATUS_MAP.REJECTED && typeof onRejected !== 'function') {
        reject(this[VALUE]);
      }
    });

    if (typeof onFulfilled === 'function') {
      thenablePromise[HANDLER].onFulfilled = onFulfilled;
    }

    if (typeof onRejected === 'function') {
      thenablePromise[HANDLER].onRejected = onRejected;
    }

    this[QUEUE].push(thenablePromise);
    this.run();

    return thenablePromise;
  }

  catch(onReject) {
    return this.then(null, onReject);
  }

  run() {
    if (this[STATE] === STATUS_MAP.PENDING) return;
    const node = document.createTextNode(true);
    const observer = new MutationObserver(() => {
      this.processNextTick();
    });
    observer.observe(node, {
      childList: true,
      attributes: true,
      characterData: true,
    });
    node.data = !node.data;
  }

  processNextTick() {
    let handler;
    while (this[QUEUE].length > 0) {
      const thenablePromise = this[QUEUE].shift();
      if (this[STATE] === STATUS_MAP.FULFILLED) {
        handler = thenablePromise[HANDLER].onFulfilled || ((v) => v);
      } else if (this[STATE] === STATUS_MAP.REJECTED) {
        handler = thenablePromise[HANDLER].onRejected
        || ((r) => {
          throw new Error(r);
        });
      }
      try {
        const x = handler(this[VALUE]);
        thenablePromise.resolvePromise(x);
      } catch (error) {
        thenablePromise.transition(STATUS_MAP.REJECTED, error);
      }
    }
  }

  resolvePromise(x) {
    if (this === x) {
      throw new TypeError('TypeError: Chaining cycle detected for promise');
    }

    let called;

    if (x instanceof Promise) {
      try {
        const onFulfilled = (value) => {
          if (called) return;
          called = true;
          this.resolvePromise(value);
        };
        const onRejected = (reason) => {
          if (called) return;
          called = true;
          this.transition(STATUS_MAP.REJECTED, reason);
        };
        x.then(onFulfilled, onRejected);
      } catch (error) {
        if (called) return;
        called = true;
        this.transition(STATUS_MAP.REJECTED, error);
      }
    } else {
      this.transition(STATUS_MAP.FULFILLED, x);
    }
  }
}
