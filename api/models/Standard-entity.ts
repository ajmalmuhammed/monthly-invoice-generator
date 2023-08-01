import { IsDate } from "class-validator";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class StandardEntity {

    @PrimaryGeneratedColumn({type: 'int', unsigned:true})
    id : number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}