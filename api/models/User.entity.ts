import { Entity, Column } from "typeorm"
import StandardEntity from "./Standard-entity"


@Entity()
export class User extends StandardEntity{
    @Column()
    email: string

    @Column()
    password: string

    @Column()
    salary: number

}