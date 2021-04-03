import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class RandomLetter {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column('string')
  randomLetter: string;
}
