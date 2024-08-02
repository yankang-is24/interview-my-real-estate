import {delay, http, HttpResponse} from 'msw'
import {PROPERTY_TYPE, RealEstate} from "../types";

export const handlers = [
    http.get<never, never, RealEstate[]>('http://localhost:8080/real-estates', async () => {
        await delay(1000);
        return HttpResponse.json([
            {
                street: "Elsa-Brändström-Str.",
                houseNumber: "1",
                postCode: "05605",
                city: "Ehrigland",
                floor: 1,
                propertyType: PROPERTY_TYPE.APARTMENT
            },
            {
                street: "Elsa-Brändström-Str.",
                houseNumber: "1",
                postCode: "05605",
                city: "Ehrigland",
                livingArea: 195,
                propertyType: PROPERTY_TYPE.APARTMENT
            },
            {
                street: "Hufer Weg",
                houseNumber: "86b",
                postCode: "14249",
                city: "Nikascheid",
                livingArea: 110,
                propertyType: PROPERTY_TYPE.APARTMENT
            }
        ])
    }),
]