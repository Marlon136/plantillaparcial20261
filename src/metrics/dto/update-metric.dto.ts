import { PartialType } from '@nestjs/mapped-types';
import { CreateMetricDto } from './create-metric.dto';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export class UpdateMetricDto extends PartialType(CreateMetricDto) {}
