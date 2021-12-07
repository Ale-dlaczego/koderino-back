import { ApiProperty } from '@nestjs/swagger';

export class AuthTokenType {
    @ApiProperty()
        tokenType: string;

    @ApiProperty()
        accessToken: string;
}
