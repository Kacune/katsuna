import { Optional } from "@nestjs/common";
import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Provider } from "src/common/types/user";

export class CreateUserDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;
    provider: Provider;
    providerId: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;
}
