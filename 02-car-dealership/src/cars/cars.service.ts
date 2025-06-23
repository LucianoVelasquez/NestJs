import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';


@Injectable()
export class CarsService {

    private cars : Car[] = [
        {
            id: uuid(),
            brand: "Toyota",
            model: "Corolla"
        },
        {
            id:uuid(),
            brand: "Honda",
            model: "Civic"
        },
        {
            id:uuid(),
            brand: "Ford",
            model: "Mustang"
        },
        {
            id:uuid(),
            brand: "Chevrolet",
            model: "Camaro"
        },
        {
            id:uuid(),
            brand: "Jeep",
            model: "Wrangler"
        }
    ]; 

    findAll() : Car[] {
        return this.cars;
    }

    findById(id : string) : Car  {

        const car : Car = this.cars.find(car => car.id.includes(id));

        if(!car) throw new NotFoundException( `Car with id ${id} not found`);

        return car;
    }

    create(car : Car) : Car {
        this.cars.push(car);
        return car;
    }

}
