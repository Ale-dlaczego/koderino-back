import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { openApiTags } from 'src/openApiTags';
import { SeederService } from './seeder.service';

@Controller('seeder')
export class SeederController {

    constructor(
        private readonly seederService: SeederService,
    ) { }

    @ApiOperation({
        summary: 'Generate random work positions',
        description: 'Generate random work positions',
        tags: [openApiTags.seeder],
    })
    @ApiQuery({
        name: 'amount',
        type: Number,
        description: 'Amount of generated work positions (default 10)',
        required: false,
    })
    @ApiResponse({status: 200})
    @Get('work-positions')
    public async seedWorkPositions(
        @Query('amount') amount?: number,
    ): Promise<void> {
        this.seederService.seedWorkPositions(amount);
    }
}
