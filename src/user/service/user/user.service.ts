import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './../../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ){}
  
  create(user: UserDto): Promise<UserDto> { 
    return this.userRepository.save(user);
  }

  findAll(): Promise<UserDto[]> {
    return this.userRepository.find();;
  }
}