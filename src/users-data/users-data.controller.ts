import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/currentUser.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CurrentUserType } from 'src/types/CurrentUser.type';
import { UserDataUpdateDto } from './dto/userDataUpdate.dto';
import { UsersDataService } from './users-data.service';

@Controller('users-data')
export class UsersDataController {

    constructor(
        private readonly usersDataService: UsersDataService,
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    updateUserData(
        @Body() userDataUpdateDto: UserDataUpdateDto,
        @CurrentUser() user: CurrentUserType,
    ) {
        return this.usersDataService.updateUserData(
            userDataUpdateDto,
            user.userId,
        );
    }
}
