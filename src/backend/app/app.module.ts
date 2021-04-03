import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { NumberService } from "./number.service";
import { RandomLetterRepository } from "./random-letter.repository";
import { RandomNumberRepository } from "./random-number.repository";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'nestjs-nextjs-integ',
      autoLoadEntities: true,
      synchronize: false,
    }),
    TypeOrmModule.forFeature([RandomNumberRepository, RandomLetterRepository]),
  ],
  controllers: [AppController],
  providers: [NumberService]
})
export class AppModule {}
