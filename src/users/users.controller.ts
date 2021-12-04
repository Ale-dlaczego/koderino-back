import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: User})
    createUser(
        @Body() createUserDto: CreateUserDto,
    ) {
        return this.usersService.createUser(createUserDto);
    }
}
