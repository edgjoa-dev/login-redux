import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { checkingAuthentication, onSignIntWithGoogle } from '../store/thunks';



export const LoginScreen = () => {

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: 'test@google.com',
        password: '123456789',
    })


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(checkingAuthentication())
        console.log('formulario enviado');
        console.log({email, password});
    };

    const onGoogleSingIn = ()=> {
        console.log('signIng google');
        dispatch( onSignIntWithGoogle() )
    }


    return (
        <form  onSubmit={handleSubmit}>
            <input
                type='text'
                name='email'
                value={email}
                onChange={onInputChange}
            />
            <input
                type='password'
                name='password'
                value={password}
                onChange={onInputChange}
            />

            <button
                type='submit'
            >
                Login
            </button>

            <button
                type='submit'
                onClick={onGoogleSingIn}
            >
                Google
            </button>
        </form>
    )
}
