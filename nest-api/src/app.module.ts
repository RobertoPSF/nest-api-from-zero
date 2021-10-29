import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    //MongooseModule.forRoot("mongodb://user:senha@host:port/nome_da_base")
    MongooseModule.forRoot("mongodb://localhost:27017/nest-api-db"),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
