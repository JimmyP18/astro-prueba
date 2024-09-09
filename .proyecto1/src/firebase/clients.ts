import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjhKBTh9_-4IM7y9-GGU5wrccB4suCovs",
  authDomain: "my-auth-domain",
  projectId: "test-fe1e9",

};

export const app = initializeApp(firebaseConfig);