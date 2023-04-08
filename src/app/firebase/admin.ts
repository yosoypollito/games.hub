import { initializeApp, getApps, cert} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"
import { getAuth } from "firebase-admin/auth";

const privateKey = process.env.FIREBASE_CREDENTIAL_PRIVATE_KEY?.replace(/\\n/g,"\n");

const app = (!getApps().length) ? initializeApp({
  credential: cert({
    projectId:process.env.FIREBASE_CREDENTIAL_PROJECT_ID,
    clientEmail:process.env.FIREBASE_CREDENTIAL_CLIENT_EMAIL,
    privateKey
  })
}) : getApps()[0];

//const app = (!getApps().length) ? initializeApp({
//credential: applicationDefault()
//}) : getApps()[0];
export const auth = getAuth();
export const db = getFirestore(app);
