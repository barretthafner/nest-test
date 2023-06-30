import { PartialType } from '@nestjs/mapped-types';
import { CreateDonutDto } from './create-donut.dto';

export class UpdateDonutDto extends PartialType(CreateDonutDto) {}
