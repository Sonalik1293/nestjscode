import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './user-dto';
import { User } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userservice:UserService){}

@Post('/')
async create(@Body() userDto: UserDto) {
this.userservice.create(userDto);
  }
 
@Get('/')
findAll(): User[] {
return this.userservice.findAll();
}
}
