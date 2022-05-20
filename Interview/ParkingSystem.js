class Billing {
  constructor(price, chargeableTime) {
    this.price = price;
    this.chargeableTime = chargeableTime;
    this.priceMap = new Map();
  }

  startBilling(licensePlateNumber) {
    this.priceMap.set(licensePlateNumber, {
      price: 0,
      timer: 0,
    });

    const theCar = this.priceMap.get(licensePlateNumber);
    const timer = setInterval(() => {
      theCar.price += this.price;
    }, this.chargeableTime);
    theCar.timer = timer;
  }

  stopBilling(licensePlateNumber) {
    clearInterval(this.priceMap.get(licensePlateNumber).timer);
    this.priceMap.delete(licensePlateNumber);
  }
}

class ParkingSystem {
  constructor(space, price, chargeableTime) {
    this.maxSpace = space;
    this.space = space;
    this.Billing = new Billing(price, chargeableTime);
  }

  addCar(licensePlateNumber) {
    if (this.space > 0) {
      this.space -= 1;
      this.billing.startBilling(licensePlateNumber);
    } else {
      console.log('no vacancy');
    }
  }

  removeCar(licensePlateNumber) {
    if (this.space !== this.maxSpace) {
      this.space += 1;
      this.billing.stopBilling(licensePlateNumber);
    } else {
      console.log('Ｔhere is no car in the parking');
    }
  }
}

const parking = new ParkingSystem(2, 10, 1000);
parking.addCar('a');
parking.addCar('b');
parking.addCar('c');
setInterval(() => {
  console.log(parking.Billing.priceMap.get('a').price);
}, 1000);

setTimeout(() => {
  parking.removeCar('a');
}, 5000);
