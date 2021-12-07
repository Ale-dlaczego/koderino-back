import { Module } from '@nestjs/common';
import { UsersDataService } from './users-data.service';
import { UsersDataController } from './users-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserData, UserDataSchema } from 'src/schemas/userData.schema';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: UserData.name,
                schema: UserDataSchema,
            },
        ]),
        UsersModule,
    ],
    providers: [UsersDataService],
    controllers: [UsersDataController],
    exports: [UsersDataService],
})
export class UsersDataModule { }
