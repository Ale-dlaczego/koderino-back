import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WorkPositionDocument } from 'src/schemas/workPosition.schema';
import WorkPositionCreateDto from './dto/workPositionCreate.dto';

@Injectable()
export class WorkPositionsService {

    constructor(
        @InjectModel('WorkPosition') private readonly workPositionModel: Model<WorkPositionDocument>,
    ) { }

    public async getAllWorkPositions(): Promise<WorkPositionDocument[]> {
        return await this.workPositionModel.find().exec();
    }

    public async createWorkPosition(workPosition: WorkPositionCreateDto): Promise<WorkPositionDocument> {
        return await this.workPositionModel.create(workPosition);
    }

}
