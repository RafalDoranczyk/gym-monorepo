import { Container } from 'inversify';

import {
  ConfigModuleContainer,
  DatabaseModuleContainer,
  ServerContainerModule,
} from './modules';

const appContainer = new Container();

appContainer.load(ConfigModuleContainer);
appContainer.load(ServerContainerModule);
appContainer.load(DatabaseModuleContainer);

export default appContainer;
