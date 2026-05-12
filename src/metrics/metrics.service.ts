import { Injectable } from '@nestjs/common';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { EngagementQueryDto } from './dto/engagement.dto';
import { CpmQueryDto } from './dto/cmp.dto';

@Injectable()
export class MetricsService {
  engagement(engagementQueryDto: EngagementQueryDto) {
    const { likes, comments, followers } = engagementQueryDto;
    const rate = (likes + comments) / (followers * 100);
    return { rate: rate };
  }

  cmp(cpmQueryDto: CpmQueryDto) {
    const { cost, impressions } = cpmQueryDto;
    const cpm = (cost / impressions) * 1000;
    return { cpm: cpm };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createMetricDto: CreateMetricDto) {
    return 'This action adds a new metric';
  }

  findAll() {
    return `This action returns all metrics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metric`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateMetricDto: UpdateMetricDto) {
    return `This action updates a #${id} metric`;
  }

  remove(id: number) {
    return `This action removes a #${id} metric`;
  }
}
