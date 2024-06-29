import { Module } from '@nestjs/common';
import { JwtAuthModule } from '../jwt/jwt-auth.module';
import { GoogleOauthController } from './google-oauth.controller';
import { GoogleOauthStrategy } from './google-oauth.strategy';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule, JwtAuthModule],
  controllers: [GoogleOauthController],
  providers: [GoogleOauthStrategy],
})
export class GoogleOauthModule {}