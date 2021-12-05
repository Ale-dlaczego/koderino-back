import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/userLogin.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    @ApiResponse({status: 200})
    @ApiUnauthorizedResponse()
    async login(
        @Body() userLoginDto: UserLoginDto,
    ) {
        return this.authService.login(userLoginDto);
    }
}
