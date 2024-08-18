/* eslint-disable no-unused-vars */
import { UserEntity } from 'entities';
import { interfaces } from 'inversify';

export type EnvVariables = {
  API_HOST: string;
  API_PORT: number;
  DB_HOST: string;
  DB_NAME: string;
  DB_PASSWORD: string;
  DB_PORT: number;
  DB_TYPE: 'postgres';
  DB_USER: string;
};

declare module 'fastify' {
  interface FastifyRequest {
    container: interfaces.Container;
    // user: UserEntity;
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvVariables {}
  }
}
