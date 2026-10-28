// URL del producto deployado (app). Cambiar con PUBLIC_APP_URL o acá.
export const APP_URL: string = (import.meta.env.PUBLIC_APP_URL ?? 'http://localhost:3000').replace(/\/$/, '');
export const LOGIN_URL = `${APP_URL}/login`;
// Se configura cuando GymFlow defina su canal comercial oficial.
export const CONTACT_EMAIL: string | undefined = import.meta.env.PUBLIC_CONTACT_EMAIL;
export const SITE_NAME = 'GymFlow';
