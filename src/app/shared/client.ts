export class Client {
    name!: string;
    username!: string;
    email!: string;
    address!: {
      streetA: string,
      streetB: string,
      streetC: string,
      streetD: string,
      city: string,
      state: string,
      country: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    }
    phone!: string;
    website!: string;
    company!: {
      name: string
    };
    posts!: string[];
    subject!: string;
  }