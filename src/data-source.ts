import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Lesson } from "./entities/Lesson";
import { Exercise } from "./entities/Exercise";
import { Progression } from "./entities/Progression";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 6543,
    username: "adminmusic",
    password: "adminmusic",
    database: "musical-encyclopedia-database",
    synchronize: true,
    logging: false,
    entities: [User, Lesson, Exercise, Progression],
});
