import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from '../auth/decorators/index';


import { JwtGuard } from '../auth/guard/index';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  // users/me
  @Get('me')
  getMe(@GetUser() user: User, @GetUser('email') email: string) {
    // Just example how to use custom field from custom @GetUser decorator
    console.log({
      email,
    });

    return user;
  }
}
