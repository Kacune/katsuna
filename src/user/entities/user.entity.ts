import { MinLength } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({length: 30})
    firstName: string

    @Column({length: 30})
    lastName: string

    @Column()
    email: string

    @Column()
    @MinLength(7)
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column()
    isActive: Boolean
}
