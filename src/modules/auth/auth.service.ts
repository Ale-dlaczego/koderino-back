import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from './dto/userLogin.dto';
import { AuthTokenType } from '../../types/AuthToken.type';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (user && await bcrypt.compare(
            password,
            user.password,
        )) {
            const { password, ...userData } = user;
            return userData;
        }
        return null;
    }

    async login(user: UserLoginDto): Promise<AuthTokenType> {
        const userData = await this.validateUser(
            user.email,
            user.password,
        );
        if (!userData) throw new UnauthorizedException();
        delete userData._doc.password;
        const payload = {...userData._doc};
        return {
            tokenType: 'Bearer',
            accessToken: this.jwtService.sign(payload),
        };
    }
}
