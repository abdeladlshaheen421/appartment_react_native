export interface AppartmentInterface {
  id: string;
  name?: String;
  type?: string;
  description?: string;
  price?: number;
  ownerName?: string;
  ownerPhone?: string;
}

export type RootStackParamList = {
  Home: undefined;
  Details: {item: AppartmentInterface};
};
