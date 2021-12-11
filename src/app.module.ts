import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersDataModule } from './modules/users-data/users-data.module';
import { WorkPositionsModule } from './modules/work-positions/work-positions.module';

@Module({
    imports: [
        // Globals
        ConfigModule.forRoot(),
        MongooseModule.forRoot('mongodb://localhost/koderino'),

        // Koderino modules
        UsersModule,
        AuthModule,
        UsersDataModule,
        WorkPositionsModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
