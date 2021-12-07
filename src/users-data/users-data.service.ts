import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserData, UserDataDocument } from 'src/schemas/userData.schema';
import { UsersService } from 'src/users/users.service';
import { UserDataUpdateDto } from './dto/userDataUpdate.dto';

@Injectable()
export class UsersDataService {
    constructor(
        @InjectModel(UserData.name) private readonly userDataModel: Model<UserDataDocument>,
        private readonly usersService: UsersService,
    ) { }

    async updateUserData(userDataUpdateDto: UserDataUpdateDto, userId: string) {
        const user = await this.usersService.findOneById(userId);

        if (user.userData) await this.userDataModel.findByIdAndRemove(user.userData._id);

        const userData = await this.userDataModel.create(userDataUpdateDto);
        user.userData = userData._id;
        this.usersService.updateById(
            user._id,
            user,
        );
    }
}
