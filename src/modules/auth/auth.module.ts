import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/modules/users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import Config from 'src/config';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: Config.JWT_SECRET,
            signOptions: { },
        }),
    ],
    providers: [
        AuthService,
        JwtStrategy,
    ],
    controllers: [AuthController],
})
export class AuthModule { }
