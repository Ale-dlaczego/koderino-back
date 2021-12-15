import { Injectable } from '@nestjs/common';
import { WorkPositionsService } from '../work-positions/work-positions.service';
import * as faker from 'faker';

@Injectable()
export class SeederService {
    constructor(
        private readonly workPositionsService: WorkPositionsService,
    ) { }

    public async seedWorkPositions(
        amount = 10,
    ): Promise<void> {
        [...Array(amount).keys()].forEach(async () => {
            const workPosition = {
                name: faker.company.catchPhrase(),
                iconUrl: faker.image.imageUrl(),
            };
            await this.workPositionsService.createWorkPosition(workPosition);
        });
    }
}
