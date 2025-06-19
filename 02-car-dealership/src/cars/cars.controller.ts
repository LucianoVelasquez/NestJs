import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
import { ICar } from './common/Icar';

@Controller('cars')
export class CarsController {

    constructor( private readonly CarsService: CarsService ){}

    @Get()
    public getCars(): ICar[] {
        return this.CarsService.findAll();
    }

     @Get(":id")
    public getCarById( @Param("id") id ) : ICar | string {
        
        let index = parseInt(id);
        
        if( isNaN(index) ) {
            return `this id "${id}" is not a number`;
        }

        if( index > this.CarsService.findAll().length || index <= 0) {
            return `${index} is Invalid ID`;
        }

        return this.CarsService.findById(index);

    } 
}
