// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: '',
  openWeather: {
    key: 'fae14890e394f8ffdbc3b4f7fac0fc20',
    Url: 'https://api.openweathermap.org/data/2.5/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.

 APIS:
 -https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 -https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
