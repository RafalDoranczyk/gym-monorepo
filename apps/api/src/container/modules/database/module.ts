import { log } from '@repo/logger';
import { ContainerModule } from 'inversify';
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
    log().info(`${process.env.DB_TYPE} DB CONNECTED`);
  } catch (error) {
    log().error('DB ERROR');
    log().error(error);

    throw error;
  }
});
