import { EntityRepository, Repository } from "typeorm";
import { RandomNumber } from "./entities/random-number.entity";

@EntityRepository(RandomNumber)
export class RandomNumberRepository extends Repository<RandomNumber> {}
