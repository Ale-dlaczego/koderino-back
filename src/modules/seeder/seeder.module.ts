import { Module } from '@nestjs/common';
import { WorkPositionsModule } from '../work-positions/work-positions.module';
import { SeederService } from './seeder.service';
import { SeederController } from './seeder.controller';

@Module({
    imports: [WorkPositionsModule],
    providers: [SeederService],
    exports: [SeederService],
    controllers: [SeederController],
})
export class SeederModule { }
