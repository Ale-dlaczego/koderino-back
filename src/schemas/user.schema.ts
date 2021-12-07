import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';
import { UserData } from './userData.schema';

@Schema()
export class User {
    @ApiProperty()
        _id: Types.ObjectId;

    @ApiProperty()
    @Prop({
        required: true,
    }) email: string;

    @ApiProperty()
    @Prop({
        required: true,
    }) password: string;

    @ApiProperty()
    @Prop({
        type: Types.ObjectId,
        ref: 'UserData',
    }) userData: UserData;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
