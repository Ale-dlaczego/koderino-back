import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        // Koderino modules
        UsersModule,

        // Globals
        ConfigModule.forRoot(),
        MongooseModule.forRoot('mongodb://localhost/koderino'),
    ],
    controllers: [AppController],
})
export class AppModule {}
