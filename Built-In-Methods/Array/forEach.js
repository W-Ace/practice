// eslint-disable-next-line no-extend-native
Array.prototype.forEach = function (callback) {
  if (typeof callback === 'function') {
    for (let i = 0; i < this.length; i++) {
      callback.call(this, this[i], i);
    }
  }
};
