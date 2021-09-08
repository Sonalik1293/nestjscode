import { Injectable } from '@nestjs/common';
import { UserDto } from './user-dto';
import { User } from './user.interface';

@Injectable()
export class UserService {
    public user: UserDto[] = [];

    create(usr: User) {
        this.user.push(usr);
    }

    findAll(): UserDto[] {
    return this.user;
    }
}
