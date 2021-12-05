import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        // Globals
        ConfigModule.forRoot(),
        MongooseModule.forRoot('mongodb://localhost/koderino'),

        // Koderino modules
        UsersModule,
        AuthModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
