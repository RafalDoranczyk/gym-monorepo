import { ConfigSymbols } from '@/container/symbols';
import { ContainerModule } from 'inversify';

export type ConfigModuleInterface = {
  host: string;
  port: number;
};

export default new ContainerModule(bind => {
  const value: ConfigModuleInterface = {
    host: process.env.API_HOST,
    port: +process.env.API_PORT,
  };

  bind(ConfigSymbols.Config).toConstantValue(value);
});
