import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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
    public getCarById( @Param("id", ParseIntPipe) id : number ) : ICar | string {

        return this.CarsService.findById(id);
    } 

    @Post()
    public createCar( @Body() body : ICar ) : ICar {
        return body;
    }

    @Patch(":id")
    public updateCar(@Param("id", ParseIntPipe) id : number, @Body() body : ICar ) : ICar {
        return body;
    }

    @Delete()
    public deleteCar( @Param("id", ParseIntPipe) id : number ) : string  {
        return "Car deleted";
    }
}
