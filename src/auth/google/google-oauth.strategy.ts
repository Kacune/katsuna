import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/user.service';

@Injectable()
export class GoogleOauthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    configService: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      clientID: configService.get<string>('OAUTH_GOOGLE_ID'),
      clientSecret: configService.get<string>('OAUTH_GOOGLE_SECRET'),
      callbackURL: configService.get<string>('OAUTH_GOOGLE_REDIRECT_URL'),
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
  ) {
    const { id, name, emails } = profile;

    let user = await this.userService.findByProviderid(id);
    
    if (!user) {
      user = await this.userService.create({
        provider: 'google',
        providerId: id,
        firstName: name.givenName,
        lastName: name.familyName,
        email: emails[0].value
      });
    }

    return user;
  }
}