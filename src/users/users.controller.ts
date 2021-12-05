import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/currentUser.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created object.', type: User})
    createUser(
        @Body() createUserDto: CreateUserDto,
    ) {
        return this.usersService.createUser(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    @ApiResponse({ status: 201, description: 'Authorized/logged in user object.'})
    @ApiUnauthorizedResponse()
    getAuthUser(
        @CurrentUser() user,
    ) {
        return user;
    }
}
