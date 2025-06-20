import { Injectable, NotFoundException } from '@nestjs/common';
import { ICar } from './common/Icar';

@Injectable()
export class CarsService {

    private cars : ICar[] = [
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

    findAll() : ICar[] {
        return this.cars;
    }

    findById(id : number) : ICar  {

        const car : ICar = this.cars.find(car => car.id == id);

        if(!car) throw new NotFoundException( `Car with id ${id} not found`);

        return car;
    }

    create(car : ICar) : ICar {
        this.cars.push(car);
        return car;
    }

}
