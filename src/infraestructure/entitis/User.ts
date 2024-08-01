import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: string = "";

  @Column()
  username: string = "";

  @Column()
  password: string = "";

  @Column()
  email: string = "";
}
