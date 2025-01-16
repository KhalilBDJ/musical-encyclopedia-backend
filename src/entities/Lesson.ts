import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Lesson {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    content: string;

    @Column()
    level: string;


}
