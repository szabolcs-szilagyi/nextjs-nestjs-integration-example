import { EntityRepository, Repository } from "typeorm";
import { RandomLetter } from "./entities/random-letter.entity";

@EntityRepository(RandomLetter)
export class RandomLetterRepository extends Repository<RandomLetter> {}
