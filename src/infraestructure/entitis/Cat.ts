

import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Cat {
  @ObjectIdColumn()
  id: ObjectId | undefined;

  @Column()
  name: string | undefined;

  @Column()
  description: string | undefined;

  @Column()
  origin: string | undefined;

  @Column()
  temperament: string | undefined;
}
