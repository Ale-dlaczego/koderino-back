import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/userLogin.dto';
import { AuthTokenType } from '../../types/AuthToken.type';
import { openApiTags } from 'src/openApiTags';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @ApiOperation({
        summary: 'Generate user auth token',
        description: 'Generate authorization user token with token type',
        tags: [openApiTags.auth],
    })
    @Post('login')
    @ApiResponse({status: 200, type: AuthTokenType })
    @ApiUnauthorizedResponse()
    async login(
        @Body() userLoginDto: UserLoginDto,
    ) {
        return this.authService.login(userLoginDto);
    }
}
