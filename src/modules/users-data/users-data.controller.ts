import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CurrentUser } from 'src/modules/auth/currentUser.decorator';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { openApiTags } from 'src/openApiTags';
import { CurrentUserType } from 'src/types/CurrentUser.type';
import { UserDataUpdateDto } from './dto/userDataUpdate.dto';
import { UsersDataService } from './users-data.service';

@Controller('users-data')
export class UsersDataController {

    constructor(
        private readonly usersDataService: UsersDataService,
    ) { }

    @ApiOperation({
        summary: '[AUTH] Create/update user data obiect',
        description: 'Create new (if not exists) or overrite current user-data for authorized user',
        tags: [openApiTags.usersData],
    })
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
