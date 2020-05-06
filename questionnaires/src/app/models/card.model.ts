export interface Card {
  login: string;
  firstName: string;
  lastName: string;
  namesOfParents: string;
  dateOfBirth: string;
  placeOfBirth: string;
  pesel: string;
  address: string;
  city: string;
  zipCode: string;
  family: Family[];
  approve: boolean;
  key: string;
}

export interface Family {
  dob: string;
  name: string;
  relationship: string;
}
