import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './interfaces/car.interface';


@Controller('cars')
export class CarsController {

    constructor( private readonly CarsService: CarsService ){}

    @Get()
    public getCars(): Car[] {
        return this.CarsService.findAll();
    }

     @Get(":id")
    public getCarById( @Param("id", ParseIntPipe) id : number ) : Car | string {

        return this.CarsService.findById(id);
    } 

    @Post()
    public createCar( @Body() body : Car ) : Car {
        return body;
    }

    @Patch(":id")
    public updateCar(@Param("id", ParseIntPipe) id : number, @Body() body : Car ) : Car {
        return body;
    }

    @Delete()
    public deleteCar( @Param("id", ParseIntPipe) id : number ) : string  {
        return "Car deleted";
    }
}
