import { DataSource, DataSourceOptions } from "typeorm";
import { config as dotenvConfig } from 'dotenv'
import { registerAs } from "@nestjs/config";

dotenvConfig({ path: '.env' })


const config = {
    type: 'postgres',
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    // url: process.env.DATABASE_URL,
    entities: ['dist/**/*.entity{.ts, .js}'],
    migrations: ['dist/migrations/*{.ts, .js}'],
    autoLoadEntities: true,
    synchronize: true,
    logging: false,
    dropSchema: false,
    // ssl: {
    //     rejectUnauthorized: false,
    // }
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions)
