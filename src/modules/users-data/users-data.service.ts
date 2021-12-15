import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserData, UserDataDocument } from 'src/schemas/userData.schema';
import { UsersService } from 'src/modules/users/users.service';
import { UserDataUpdateDto } from './dto/userDataUpdate.dto';

@Injectable()
export class UsersDataService {
    constructor(
        @InjectModel(UserData.name) private readonly userDataModel: Model<UserDataDocument>,
        private readonly usersService: UsersService,
    ) { }

    async updateUserData(userDataUpdateDto: UserDataUpdateDto, userId: string): Promise<UserDataDocument> {
        const user = await this.usersService.findOneById(userId);

        const { userData } = user;
        let updatedUserData: UserDataDocument;

        if (userData) {
            updatedUserData = await this.userDataModel.findByIdAndUpdate(
                userData._id,
                userDataUpdateDto,
                {
                    new: true,
                    upsert: true,
                },
            );
        } else {
            updatedUserData = await this.userDataModel.create(userDataUpdateDto);
        }

        user.userData = updatedUserData._id;
        await this.usersService.updateById(
            user._id,
            user,
        );

        return updatedUserData;
    }
}
