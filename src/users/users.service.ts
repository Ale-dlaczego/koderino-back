import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Errors from 'src/errors';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    ) { }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const isUnique = await this.userModel.findOne({ email: createUserDto.email }) === null;
        if (!isUnique) {
            throw new BadRequestException({
                message: [Errors.USER_EMAIL_NOT_UNIQE],
            });
        }
        const createdUser = await this.userModel.create(createUserDto);
        return createdUser;
    }
}
