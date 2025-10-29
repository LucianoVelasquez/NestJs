import { Car } from "src/cars/interfaces/car.interface"
import {v4 as uuid} from "uuid"

export const CARS_SEED : Car[] = [
    {
        id: uuid(),
        brand: "toyota",
        model: "Corolla"
    },
    {
        id: uuid(),
        brand: "chevrolet",
        model: "v4"
    },
    {
        id: uuid(),
        brand: "Audi",
        model: "Autov8"
    },
    {
        id: uuid(),
        brand: "Volksvagen",
        model: "Polo"
    }
]