import { ContainerModule } from 'inversify';

import { ConfigSymbols } from '~/container/symbols';
import { EnvVariables } from '~/typings';

export type ConfigModuleInterface = EnvVariables;

export default new ContainerModule(bind => {
  const value: ConfigModuleInterface = {
    API_HOST: process.env.API_HOST,
    API_PORT: process.env.API_PORT,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,
    DB_TYPE: process.env.DB_TYPE,
    DB_USER: process.env.DB_USER,
  };

  bind(ConfigSymbols.Config).toConstantValue(value);
});
