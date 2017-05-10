interface AuthConfiguration {
    clientID: string,
    domain: string,
    options: Object
}

export const authConfig: AuthConfiguration = {
    clientID: 'vr58-dvu3gMKrBJw_nzExEJdv3sirBPi',
    domain: 'tripxpense.auth0.com',
    options: {
        allowedConnections: ['Username-Password-Authentication', 'facebook', 'google-oauth2'],
        auth: {
            redirectUrl: location.origin,
            responseType: 'code'
        }
    }
    
};