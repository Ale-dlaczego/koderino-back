import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/currentUser.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/schemas/user.schema';
import { CurrentUserType } from 'src/types/CurrentUser.type';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @ApiOperation({
        summary: 'Create new user',
        description: 'Register new user',
    })
    @ApiResponse({ status: 201, description: 'The record has been successfully created object.'})
    @Post()
    createUser(
        @Body() createUserDto: CreateUserDto,
    ) {
        return this.usersService.createUser(createUserDto);
    }

    @ApiOperation({
        summary: '[AUTH] Get user object w/references and data',
        description: 'Get complete user obiect with references and data to other obiects',
    })
    @ApiResponse({ status: 201, description: 'Authorized/logged in user object.', type: User})
    @ApiUnauthorizedResponse()
    @UseGuards(JwtAuthGuard)
    @Get('me')
    getAuthUser(
        @CurrentUser() user: CurrentUserType,
    ) {
        return this.usersService.findOneById(user.userId);
    }
}
