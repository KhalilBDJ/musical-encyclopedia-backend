import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Lesson } from "./Lesson";

@Entity()
export class Exercise {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Lesson, lesson => lesson.id)
    lessonId: Lesson;

    @Column()
    type: string;

    @Column()
    question: string;

    @Column("simple-array")
    options: string[];

    @Column()
    correctAnswer: string;
}
