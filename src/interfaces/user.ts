export default interface IUser {
  id: string;
  name: string;
  username: string;
  phone: string;
  website: string;
  address: AddressType;
  company: CompanyType;
}

type AddressType = {
  street: string;
  suit: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};

type GeoType = {
  lat: string;
  lng: string;
};

type CompanyType = { name: string; catchphrase: string; bs: string };
