import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsBoolean, IsDate, IsString } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @Optional()
    @IsString()
    firstName?: string;

    @Optional()
    @IsString()
    lastName?: string;

    @Optional()
    @IsString()
    password: string;

    @IsDate()
    updatedAt: Date
    
    @Optional()
    @IsBoolean()
    isActive?: Boolean;
}
