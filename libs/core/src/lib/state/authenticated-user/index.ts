import { AuthenticatedUserFacade } from './authenticated-user.facade';
import { AuthenticatedUserStore } from './authenticated-user.store';

export * from './authenticated-user.facade';
export * from './authenticated-user.store';

export const provideAuthenticatedUserState = () => [
  { provide: AuthenticatedUserFacade },
  { provide: AuthenticatedUserStore },
];
