import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';


@Injectable()
export class CarsService {

    private cars : Car[] = [
        {
            id:1,
            brand: "Toyota",
            model: "Corolla"
        },
        {
            id:2,
            brand: "Honda",
            model: "Civic"
        },
        {
            id:3,
            brand: "Ford",
            model: "Mustang"
        },
        {
            id:4,
            brand: "Chevrolet",
            model: "Camaro"
        },
        {
            id:5,
            brand: "Jeep",
            model: "Wrangler"
        }
    ]; 

    findAll() : Car[] {
        return this.cars;
    }

    findById(id : number) : Car  {

        const car : Car = this.cars.find(car => car.id == id);

        if(!car) throw new NotFoundException( `Car with id ${id} not found`);

        return car;
    }

    create(car : Car) : Car {
        this.cars.push(car);
        return car;
    }

}
