import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();


export const singInWithGoogle = async()=> {

    try {
        const result = await signInWithPopup( firebaseAuth, googleProvider )
        const credential = GoogleAuthProvider.credentialFromResult(result);

        console.log({credential});

    } catch (error) {
        console.log(error);
    }


}