import { Optional } from "@nestjs/common";
import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsNotEmpty()
    password: string;

    @IsDate()
    createdAt: Date

    @IsBoolean()
    isActive: Boolean
}
