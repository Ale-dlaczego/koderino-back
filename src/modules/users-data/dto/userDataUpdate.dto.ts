import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UserDataUpdateDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
        name?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @MinLength(9)
    @MaxLength(15)
        phoneNumber?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
        localization?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
        bio?: string;
}
