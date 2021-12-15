import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Errors from 'src/errors';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import Config from 'src/config';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    ) { }

    async createUser(createUserDto: CreateUserDto): Promise<UserDocument> {
        const isUnique = await this.userModel.findOne({ email: createUserDto.email }) === null;
        if (!isUnique) {
            throw new BadRequestException({
                message: [Errors.USER_EMAIL_NOT_UNIQE],
            });
        }
        const encryptedPassword = await bcrypt.hash(
            createUserDto.password,
            Config.BCRYPT_SALT_ROUNDS,
        );
        const createdUser = await this.userModel.create({...createUserDto, password: encryptedPassword});
        return createdUser;
    }

    async findOneByEmail(email: string): Promise<UserDocument | null> {
        return this.userModel.findOne({ email }).populate('userData');
    }

    async findOneById(id: string): Promise<UserDocument | null> {
        return await this.userModel.findById(id).populate('userData');
    }

    async updateById(id: string, user: UserDocument): Promise<void> {
        await this.userModel.findByIdAndUpdate(
            id,
            user,
        );
    }
}
