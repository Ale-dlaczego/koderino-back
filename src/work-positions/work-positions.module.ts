import { Module } from '@nestjs/common';
import { WorkPositionsController } from './work-positions.controller';

@Module({
    controllers: [WorkPositionsController],
})
export class WorkPositionsModule { }
