import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class RandomNumber {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column('number')
  randomNumber: number;
}
