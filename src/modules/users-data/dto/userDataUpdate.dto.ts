import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UserDataUpdateDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
        name?: string;

    @ApiProperty()
    @IsString()
    @MinLength(9)
    @MaxLength(15)
    @IsOptional()
        phoneNumber?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
        localization?: string;
}
