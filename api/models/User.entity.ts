import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import StandardEntity from "./standard-entity"


@Entity()
export class User extends StandardEntity{
    @Column()
    email: string

    @Column()
    password: string

    @Column()
    salary: number

}