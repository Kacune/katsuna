import { Module } from '@nestjs/common';
import { AppController, GoogleController } from './app.controller';
import { AppService, GoogleService } from './app.service';
import { GoogleStrategy } from './google.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'katsuna',
      entities: [],
      synchronize: false,
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController, GoogleController],
  providers: [AppService, GoogleService, GoogleStrategy],
})
export class AppModule {}
