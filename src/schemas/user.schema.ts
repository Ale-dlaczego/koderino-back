import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class User {
    @ApiProperty()
    @Prop({
        required: true,
    }) email: string;

    @ApiProperty()
    @Prop({
        required: true,
    }) password: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
