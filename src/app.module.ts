import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMCoing } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMCoing),
    BoardsModule
  ]
})
export class AppModule {}
