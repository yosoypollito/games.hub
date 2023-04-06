import { initializeApp, applicationDefault, getApps} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"
import { getAuth } from "firebase-admin/auth";


getApps()
const app = (!getApps().length) ? initializeApp({
  credential: applicationDefault()
}) : getApps()[0];
export const auth = getAuth();
export const db = getFirestore(app);
