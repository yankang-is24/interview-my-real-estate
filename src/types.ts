export interface RealEstate {
    street: string;
    houseNumber: string;
    postCode: string;
    city: string;
    propertyType: PROPERTY_TYPE;
    floor?: number;
    livingArea?: number;
}

export enum PROPERTY_TYPE {
    HOUSE = 'HOUSE',
    APARTMENT = 'APARTMENT',
}
