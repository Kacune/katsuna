import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { JwtAuthModule } from './jwt/jwt-auth.module';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { GoogleOauthModule } from './google/google-oauth.module';

@Module({
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtAuthModule,
    GoogleOauthModule,
    UserModule,
    PassportModule,
  ],
})

export class AuthModule {}