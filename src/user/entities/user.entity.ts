import { MinLength } from "class-validator";
import { Provider } from "src/common/types/user";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    provider: Provider;

    @Column({ nullable: false })
    providerId: string;
    
    @Column({length: 30})
    firstName: string

    @Column({length: 30})
    lastName: string

    @Column()
    email: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({default: true})
    isActive: Boolean
}
