import { initializeApp, credential as _credential } from "firebase-admin";

import serviceAccount from "./firebase-credentials.json";

initializeApp({
  credential: _credential.cert(serviceAccount)
});
