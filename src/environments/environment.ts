// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config : {
      apiKey: "AIzaSyCccvDfuIgpIj8J_Uk-d6h26MocZqLYeV0",
      authDomain: "e-commerce-c842b.firebaseapp.com",
      projectId: "e-commerce-c842b",
      storageBucket: "e-commerce-c842b.appspot.com",
      messagingSenderId: "678163918203",
      appId: "1:678163918203:web:5a156b6f98edddae6f61de"
    }
  },
  actionCodeSettings: {
    url: 'http://localhost:5200/profile/new',
    handleCodeInApp: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
