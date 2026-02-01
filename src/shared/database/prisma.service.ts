import 'dotenv/config';

import { Injectable } from '@nestjs/common';

import { PrismaPg } from '@prisma/adapter-pg';
import { env } from '@shared/config/env';

import { PrismaClient } from '@lib/generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaPg({
      connectionString: env.dbURL as string,
    });

    super({ adapter, log: ['query'] });
  }
}
