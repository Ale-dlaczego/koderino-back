import { ApiProperty } from '@nestjs/swagger';

export class WorkPositionSeachResultItem {
    @ApiProperty()
        id: string;

    @ApiProperty()
        name: string;

    @ApiProperty()
        iconUrl: string;
}
