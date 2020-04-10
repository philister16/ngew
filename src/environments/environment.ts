// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyBUtq53yGfnphSgwXhWBhkVHKRoGSMdax8",
  authDomain: "ngew-a2ba9.firebaseapp.com",
  databaseURL: "https://ngew-a2ba9.firebaseio.com",
  projectId: "ngew-a2ba9",
  storageBucket: "ngew-a2ba9.appspot.com",
  messagingSenderId: "59627387483",
  appId: "1:59627387483:web:d101d473533c2186c75d7e",
  measurementId: "G-JR7HCNEGHT",
};

export const environment = {
  production: false,
  firebaseConfig,
  afterLoginPath: "/",
  afterSignupPath: "/",
  afterLogoutPath: "/auth/login",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
