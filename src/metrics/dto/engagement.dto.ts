import { Type } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';

export class EngagementQueryDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  likes!: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  comments!: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  followers!: number;
}
