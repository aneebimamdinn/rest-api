import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Aneeb',
      email: 'aneebryan@gmail.com',
      type: 'admin',
    },
    {
      id: 2,
      name: 'Aneeb Imamdin',
      email: 'aneebimamdin@gmail.com',
      type: 'user',
    },
  ];

  public getUsers(type?: 'user' | 'admin') {
    if(type){
        return this.users.filter(user => user.type == type);
    }
    return this.users;
  }

  public getUserById(id : number){
    const user = this.users.filter(user => user.id == id);
    if(!user){
        throw new Error("User not found");
    }
    return user;
  }

  public createUser(createUserDto : CreateUserDto){
    const user = {
        ...createUserDto,
        id: Date.now()
    }
    this.users.push(user);
    return user;
  }
}
