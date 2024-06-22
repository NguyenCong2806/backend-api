/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UserSchema } from './users.model';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { UsersRepository } from 'src/repository/users/UserRepository';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule,
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: 'IUserRepository', useClass: UsersRepository },
  ],
  exports: [UsersService],
})
export class UsersModule {}
