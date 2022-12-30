import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;
  let id:number;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should contain a method findOne', ()=>{
    
    const findOne = service.findOne(id)
    expect(findOne).toBeDefined()
    // expect(findOne).toBe()

  })
});
