import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { openApiTags } from 'src/openApiTags';
import { WorkPosition, WorkPositionDocument } from 'src/schemas/workPosition.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { WorkPositionsService } from './work-positions.service';
import WorkPositionCreateDto from './dto/workPositionCreate.dto';

@Controller('work-positions')
export class WorkPositionsController {

    constructor(
        private readonly workPositionsService: WorkPositionsService,
    ) { }

    @ApiOperation({
        summary: 'Get all work positions',
        description: 'Get all avaiable work positions',
        tags: [openApiTags.workPositions],
    })
    @ApiResponse({status: 200, type: [WorkPosition]})
    @Get()
    public async getAllWorkPositions(): Promise<WorkPositionDocument[]> {
        return await this.workPositionsService.getAllWorkPositions();
    }

    @ApiOperation({
        summary: '[ADMIN] Create new work position',
        description: 'Create new work position',
        tags: [openApiTags.workPositions],
    })
    @ApiResponse({ status: 200, type: WorkPosition })
    @UseGuards(JwtAuthGuard)
    @Post()
    public async createWorkPosition(
        @Body() workPositionCreateDto: WorkPositionCreateDto,
    ): Promise<WorkPositionDocument> {
        return await this.workPositionsService.createWorkPosition(workPositionCreateDto);
    }
}
