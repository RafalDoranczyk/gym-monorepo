import { log } from '@repo/logger';
import { ContainerModule } from 'inversify';
import { DataSource } from 'typeorm';

export type DatabaseModuleInterface = DataSource;

export const dataSource = new DataSource({
  database: process.env.DB_NAME,
  entities: [],
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: false,
  type: process.env.DB_TYPE,
  username: process.env.DB_USER,
  // dropSchema: process.env.DROP_DB_SCHEMA,
  // synchronize: true,
});

export default new ContainerModule(async () => {
  try {
    await dataSource.initialize();
    log().info(`Database initialized`);
    log().info(`${process.env.DB_TYPE} database connected.`);
  } catch (error) {
    log().error('DB ERROR');
    log().error(error);

    throw error;
  }
});
