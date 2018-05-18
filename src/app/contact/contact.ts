export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  postalCode: string;
  phone: string;
  email: string;

  constructor(id?: number, firstName?: string, lastName?: string, street?: string, city?: string, postalCode?: string, phone?: string, email?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.city = city;
    this.postalCode = postalCode;
    this.phone = phone;
    this.email = email;
  }
}
