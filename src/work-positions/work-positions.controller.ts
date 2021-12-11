import { Controller, Get } from '@nestjs/common';

@Controller('work-positions')
export class WorkPositionsController {
    @Get()
    public getAllWorkPositions() {
        return [
            {
                id: 1,
                name: 'Internship as React.js Developer',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 2,
                name: 'Junior React.js Developer',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 3,
                name: 'Regular React.js Developer',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 4,
                name: 'Senior React.js Developer',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 5,
                name: 'React.js Tech Lead',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 6,
                name: 'Internship as React Native Developer',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 7,
                name: 'Junior React Native Developer',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 8,
                name: 'Regular React Native Developer',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
            {
                id: 9,
                name: 'Senior React Native Developer',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
            },
        ];
    }
}
