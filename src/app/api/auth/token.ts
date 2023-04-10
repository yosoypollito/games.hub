import { auth } from "@/app/firebase/admin";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";

export const getTokenPayloadFromRequest = async (
  req: Request
): Promise<DecodedIdToken | null> => {
  try {
    const headers = req.headers;
    const Authorization = headers.get("Authorization");
    if (!Authorization || !Authorization.includes("Bearer ")) {
      return null;
    }

    const token = Authorization.split(" ")[1];
    const payload = await auth.verifyIdToken(token);

    return payload;
  } catch (e: any) {
    //TODO handle firebase admin auth errors
    console.log(`Error token: ${e.message}`);
    return null;
  }
};
