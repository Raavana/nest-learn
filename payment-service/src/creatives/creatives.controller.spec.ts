import { Test, TestingModule } from '@nestjs/testing';
import { CreativesController } from './creatives.controller';

describe('CreativesController', () => {
  let controller: CreativesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreativesController],
    }).compile();

    controller = module.get<CreativesController>(CreativesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
