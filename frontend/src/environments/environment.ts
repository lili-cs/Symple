/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'symplenow.us', // the auth0 domain prefix
    audience: 'symple', // the audience set for the auth0 app
    clientId: 'G9xC7ujs6leh6d6xn8jpWeTS0m4vyvXo', // the client id generated for the auth0 app
    // callbackURL: 'https://127.0.0.1:5000/login-results' // the base url of the running ionic application. 
    callbackURL: 'http://localhost:4200/'
  }
};

