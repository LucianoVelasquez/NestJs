import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';


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

    create(createCarDto : CreateCarDto) {

        this.cars.push({
            id: uuid(),
            ...createCarDto
        });

     return this.cars.at(-1); 
    }

    update(id : string, updateCarDto : UpdateCarDto) {
        
        let car = this.findById(id);

        if(car){
            this.cars = this.cars.map(car => {
                if(car.id == id){
                    car = {
                        ...car,
                        ...updateCarDto,
                        id,
                    }
                }
                return car;
            })
        }

        return car;
    }

    delete(id:string){
        let car = this.findById(id);

        this.cars = this.cars.filter(car => car.id !== id);

        return car;
    }
}
