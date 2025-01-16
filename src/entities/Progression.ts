import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./User";
import { Lesson } from "./Lesson";

@Entity()
export class Progression {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.id)
    userId: User;

    @ManyToOne(() => Lesson, lesson => lesson.id)
    lessonId: Lesson;

    @Column()
    score: number;

    @CreateDateColumn()
    completedAt: Date;
}
