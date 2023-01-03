import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    // return 'Peter!';
    return {success: true, data : {first_name: 'Mikky', last_name: 'Lukozaded'}};
  }
  
  getHello2 = () => {
  //  Do stuff here
  }

}
