import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RandomLetterRepository } from "./random-letter.repository";
import { RandomNumberRepository } from "./random-number.repository";

@Injectable()
export class NumberService {
  constructor(
    @InjectRepository(RandomLetterRepository)
    private readonly randomLetterRepository: RandomLetterRepository,
    // if you comment one of the two repositories out, then it works
    @InjectRepository(RandomNumberRepository)
    private readonly randomNumberRepository: RandomNumberRepository,
  ) {}
}
