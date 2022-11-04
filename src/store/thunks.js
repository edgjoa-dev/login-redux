import { singInWithGoogle } from "../firebase/providers"
import { checkingCredentials } from "./auth/authSlice"


export const checkingAuthentication = (email, password) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() )
    }
}

export const onSignIntWithGoogle = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() )

        const result = await singInWithGoogle();
        console.log({result});
    }
}