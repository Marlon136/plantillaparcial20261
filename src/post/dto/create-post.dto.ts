import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  caption!: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  likes?: 0;
}
