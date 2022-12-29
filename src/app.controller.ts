import { Body, Controller, Get} from '@nestjs/common';
import { request } from 'http';
import { AppService } from './app.service';
export interface CreateCatDto {
  name: string;
  age: [];
  breed: string;
}
@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('yo')
  getHello(@Body() createCatDto: CreateCatDto ): object {
    const {name, age, breed}  = createCatDto
    console.log('====================================');
    console.log(name, age, breed);
    console.log('====================================');
    const hello = this.appService.getHello();
    return {hello:'wroig add'}
   
    
  }


}


