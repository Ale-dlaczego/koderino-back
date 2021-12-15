import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';

@Schema()
export class UserData {
    @ApiProperty()
        _id: Types.ObjectId;

    @ApiProperty()
    @Prop({
        default: '',
    }) name: string;

    @ApiProperty()
    @Prop({
        default: '',
    }) phoneNumber: string;

    @ApiProperty()
    @Prop({
        default: '',
    }) localization: string;

    @ApiProperty()
    @Prop({
        default: '',
    }) bio: string;
}

export type UserDataDocument = UserData & Document;

export const UserDataSchema = SchemaFactory.createForClass(UserData);
