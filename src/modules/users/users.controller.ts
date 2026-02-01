import { Body, Controller, Get } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/me')
  me(@Body() userId: string) {
    return this.usersService.getUserById(userId);
  }
}
