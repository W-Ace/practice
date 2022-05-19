// LoD
class CustomerWallet {
  constructor(amount = 0) {
    this.amount = amount;
  }

  addMoney(deposit) {
    this.amount += deposit;
  }

  takeMoney(withdraw) {
    this.amount -= withdraw;
  }

  getAmount() {
    return this.amount;
  }
}

class Customer {
  constructor() {
    this.wallet = new CustomerWallet();
  }

  requestPayment(price) {
    // ..
  }
}

class Product {
  constructor(price) {
    this.price = price;
  }
}

class ShopKeeper {
  static sell(product, customer) {
    const { price } = product;
    customer.requestPayment(price);
  }
}

const XiaoMing = new Customer();
XiaoMing.wallet.addMoney(1000);

const ProductA = new Product(100);

ShopKeeper.sell(ProductA, XiaoMing);
console.log(XiaoMing.wallet.getAmount()); // 900
