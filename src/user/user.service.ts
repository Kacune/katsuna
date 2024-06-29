import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
          email: createUserDto.email
      }
    })
    if (existUser) throw new BadRequestException('This email already exist')
    const user = this.userRepository.save({
      email: createUserDto.email,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
    });

    return user;
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOneByEmail(email) {
    const user = await this.userRepository.findOne({where: {
      email
    }});

    if (!user) {
      return null;
    }
    return user;
  }

  async findByProviderid(providerId) {
    return await this.userRepository.findOne ({
      where: { provider: 'google', providerId: providerId},
    });
  }

  async findOneById(id: number) {
    return await this.userRepository.findOne({where: {
      id,
    }});
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({where : {
      email,
    }});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
