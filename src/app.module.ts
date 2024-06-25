import { Module } from '@nestjs/common';
import { AppController, GoogleController } from './app.controller';
import { AppService, GoogleService } from './app.service';
import { GoogleStrategy } from './google.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [ join(__dirname + '/../**/*.entity{.ts,.js}')],
        synchronize: true,
      }),
      inject: [ConfigService]
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController, GoogleController],
  providers: [AppService, GoogleService, GoogleStrategy],
})
export class AppModule {}
