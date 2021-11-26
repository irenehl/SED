import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Head from 'next/head';
import useLocalStorage from '../../src/hooks/useLocalStorage';

const SignIn: NextPage = () => {
    const history = useRouter();
    const [token, setToken] = useLocalStorage('token', null);

    useEffect(() => {
        if (token)
            history.push('/dashboard');
    }, []);

    const email = useRef(null);
    const password = useRef(null);
    
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    async function onSubmit(e) {
        e.preventDefault();

        let validate = [ 
            email.current?.value,
            password.current?.value,
        ];

        if (validate.some(it => it == ""))
            alert('Llena todos los campos primero');
        else {
            try {
                if (!validateEmail(email.current?.value)) {
                    alert('Introduce un email valido');
                    return;
                }

                const { status, data } = await axios.post('/api/user/login', {
                    email: email.current?.value,
                    password: password.current?.value,
                });

                if (status === 200) {
                    setToken(data);
                    history.push('/dashboard');
                }
            } catch(err) {
                alert('Algo ha ido mal!');
            }
        }
    }

    return (
        <>
            <Head>
                <title>Inicio de sesion</title>
            </Head>
            <div className="w-screen h-screen flex justify-center items-center bg-dark-red">
                <form className="p-10 bg-pink rounded-xl flex justify-center items-center flex-col shadow-md" onSubmit={onSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-dark-red mb-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546
                        2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                    <p className="mb-5 text-3xl text-dark-red">Inicio de sesión</p>
                    <input ref={email} type="email" name="email" className="mb-5 p-3 w-80 focus:red-900 rounded-xl border-2 outline-none" autoComplete="off" placeholder="Correo electrónico" required/>
                    <input ref={password} type="password" name="password" className="mb-5 p-3 w-80 focus:red-900 rounded-xl border-2 outline-none" autoComplete="off" placeholder="Contraseña" required/>
                    <button className="bg-dark-red hover:bg-red-900 text-white font-bold p-2 rounded-xl w-80" id="login" type="submit"><span>Login</span></button>
                </form>
            </div>
        </>
    )
}

export default SignIn;