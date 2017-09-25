class Add {
  constructor(a, b, c) {
    this.aa = a;
    this.bb = b;
    this.cc = c;
  }

  static staticAdd(staticAdd) {
    return staticAdd.aa + staticAdd.bb + staticAdd.cc;
  }

  normalAdd() {
    return this.aa + this.bb + this.cc;
  }
}

export default Add;
