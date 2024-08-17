import { ContainerModule } from 'inversify';
import pino from 'pino';
import { DataSource } from 'typeorm';

export type DatabaseModuleInterface = DataSource;

export const dataSource = new DataSource({
  database: process.env.DB_NAME,
  entities: [],
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: +process.env.DB_PORT,
  ssl: Boolean(process.env.SSL),
  type: process.env.DB_TYPE,
  username: process.env.DB_USER,
  // dropSchema: true,
  // synchronize: true,
});

export default new ContainerModule(async () => {
  try {
    await dataSource.initialize();
    pino().info(`${process.env.DB_TYPE} DB CONNECTED`);
  } catch (error) {
    pino().error('DB ERROR');
    pino().error(error);

    throw error;
  }
});
