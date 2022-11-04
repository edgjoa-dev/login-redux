import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();


export const singInWithGoogle = async()=> {

    try {
        const result = await signInWithPopup( firebaseAuth, googleProvider )
        //const credential = GoogleAuthProvider.credentialFromResult(result);

        const { displayName, uid, email, photoURL } = result.user;
        return {
            ok: true,
            //user info
            displayName, uid, email, photoURL
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }


}