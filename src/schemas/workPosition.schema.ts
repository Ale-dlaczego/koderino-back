import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

@Schema()
export class WorkPosition {
    @ApiProperty()
        _id: Types.ObjectId;

    @ApiProperty()
    @Prop({
        required: true,
    }) name: string;

    @ApiProperty()
    @Prop({
        required: true,
    }) iconUrl: string;
}

export type WorkPositionDocument = WorkPosition & Document;

export const WorkPositionSchema = SchemaFactory.createForClass(WorkPosition);
