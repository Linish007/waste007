import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    doStuffHere(){
        return 'objects'
    }
}
