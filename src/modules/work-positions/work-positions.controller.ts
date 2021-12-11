import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { openApiTags } from 'src/openApiTags';
import { WorkPositionSeachResultItem } from './dto/workPositionSeachResultItem';

@Controller('work-positions')
export class WorkPositionsController {

    @ApiOperation({
        summary: 'Get all work positions',
        description: 'Get all avaiable work positions',
        tags: [openApiTags.workPositions],
    })
    @ApiResponse({status: 200, type: [WorkPositionSeachResultItem]})
    @Get()
    public getAllWorkPositions(): WorkPositionSeachResultItem[] {
        return [
            {
                id: 'id1',
                name: 'Internship as React.js Developer',
                iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 'id2',
                name: 'Junior React.js Developer',
                iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 'id3',
                name: 'Regular React.js Developer',
                iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 'id4',
                name: 'Senior React.js Developer',
                iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 'id5',
                name: 'React.js Tech Lead',
                iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 'id6',
                name: 'Internship as React Native Developer',
                iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 'id7',
                name: 'Junior React Native Developer',
                iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 'id8',
                name: 'Regular React Native Developer',
                iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 'id19',
                name: 'Senior React Native Developer',
                iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
        ];
    }
}
