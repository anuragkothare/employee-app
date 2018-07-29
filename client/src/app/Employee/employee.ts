export class Employee {

  constructor(public _id: String,public name: String, public email: String, public phone: number, public address: String ) {
    this._id = _id
    this.name = name
    this.email = email
    this.phone = phone
    this.address = address
  }
}
