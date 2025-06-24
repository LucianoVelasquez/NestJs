import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';


@Controller('cars')
export class CarsController {

    constructor( private readonly CarsService: CarsService ){}

    @Get()
    public getCars(): Car[] {
        return this.CarsService.findAll();
    }

     @Get(":id")
    public getCarById( @Param('id', ParseUUIDPipe) id : string ) : Car | string {

        return this.CarsService.findById(id);
    } 

    @Post()
    public createCar( @Body() CreateCarDto : CreateCarDto ) {
        return this.CarsService.create(CreateCarDto);
    }

    @Patch(":id")
    public updateCar( @Param('id', ParseUUIDPipe) id : string, @Body() updateCarDto : UpdateCarDto ) {
        return this.CarsService.update(id, updateCarDto);
    }

    @Delete()
    public deleteCar( id : string ) : string  {
        return "Car deleted";
    }
}
