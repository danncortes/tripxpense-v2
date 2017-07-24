import { environment } from '../../../environments/environment';

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
    clientID: 'ymL4nxGL7u809BgZa2yQI3dIcBoVms63',
    domain: 'tripxpense.auth0.com',
    callbackURL: environment.callback
};
