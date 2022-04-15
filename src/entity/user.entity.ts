import {
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity({ name: "users" })
export class User extends BaseEntity {

  @PrimaryGeneratedColumn({
    type:"int"
  })
  public id: number;

  @Column()
  public firstname: string;

  @Column()
  public lastname: string;

  @Column({
    default: true
  })
  private active: boolean;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
