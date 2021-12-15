import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkPosition, WorkPositionSchema } from 'src/schemas/workPosition.schema';
import { WorkPositionsController } from './work-positions.controller';
import { WorkPositionsService } from './work-positions.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: WorkPosition.name,
                schema: WorkPositionSchema,
            },
        ]),
    ],
    controllers: [WorkPositionsController],
    providers: [WorkPositionsService],
    exports: [WorkPositionsService],
})
export class WorkPositionsModule { }
