import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity} from "typeorm";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    passwordHash: string;

    @CreateDateColumn()
    createdAt: Date;
}
