import { app } from "./config";
import { getAuth, type User, signInAnonymously } from "firebase/auth"

export const useAuth = ()=>{
  const auth = getAuth(app)

  const onAuthChange = ()=>new Promise<User | null>((resolve, reject)=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        return resolve(user)
      }

      resolve(null)
    });
  });

  const anonSignIn = ()=>new Promise(async (resolve,reject)=>{
    try{
      await signInAnonymously(auth);

      resolve("Account created or reloged in");
    }catch(e){
      //TODO handle diff errors;
      reject(e);
    }
  });

  return {
    auth,
    onAuthChange,
    anonSignIn
  }
};
