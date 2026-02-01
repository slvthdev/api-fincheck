import { Injectable } from '@nestjs/common';

import { PrismaService } from '@database/prisma.service';
import { type Prisma } from '@lib/generated/prisma/client';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto: Prisma.CategoryFindManyArgs) {
    return this.prismaService.category.findMany(findManyDto);
  }
}
