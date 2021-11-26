import axios from 'axios';
import { useRef } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Register: NextPage = () => {
    const history = useRouter();
    const [val, setVal] = useState("female");

    const fullName = useRef(null);
    const email = useRef(null);
    const gender = useRef(null);
    const dob = useRef(null);
    const password = useRef(null);
    const phone = useRef(null);

    function onChangeSelect(e) {
        setVal(e.target.value);
    }
    
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    async function onSubmit() {
        let validate = [ 
            fullName.current?.value,
            email.current?.value,
            gender.current?.value,
            dob.current?.value,
            password.current?.value,
            phone.current?.value,
        ]

        if (validate.some(it => it == ""))
            alert('Llena todos los campos primero');
        else {
            try {
                if (password.current?.value.length < 8) {
                    alert('Contraseña demasiado corta!');
                    return;
                }

                if (!validateEmail(email.current?.value)) {
                    alert('Introduce un email valido');
                    return;
                }

                const data = await axios.post('/api/user/register', {
                    name: fullName.current?.value,
                    email: email.current?.value,
                    gender: gender.current?.value,
                    dob: dob.current?.value,
                    password: password.current?.value,
                    phone: phone.current?.value,
                });
    
                if (data.status === 201)
                    history.push('/login');
            } catch(err) {
                alert('Algo ha ido mal!');
                console.log(err.response);
            }
        }
    }

    return (
        <>
            <Head>
                <title>Registro</title>
            </Head>
            <div className="min-w-screen min-h-screen bg-dark-red flex items-center justify-center px-5 py-5">
            <div className="bg-pink text-gray-500 rounded-3xl shadow-xl overflow-hidden">
                <div className="md:flex w-full justify-center">
                    <div className="w-full md:w-full py-10 px-5 md:px-10 items-center justify-center">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-dark-red">Registro</h1>
                            <p>Ingresa la siguiente información😎</p>
                        </div>
                        <div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input
                                            ref={fullName}
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-red-900"
                                            placeholder="Nombre Completo" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input
                                            ref={email}
                                            type="email"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-red-900"
                                            placeholder="Correo Electrónico"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-1/3 px-3 mb-5">
                                    <div className="h-10 flex rounded items-center">
                                        <select
                                            onChange={onChangeSelect}
                                            ref={gender}
                                            value={val}
                                            name="select"
                                            id="select"
                                            className="px-4 w-full pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-dark-red checked"
                                        >
                                            <option value="female">F</option>
                                            <option value="male">M</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-2/3 px-3 mb-5">
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input
                                            ref={dob}
                                            type="date"
                                            className="w-full -ml-10 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-dark-red"
                                            placeholder="Nacimiento"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input
                                            ref={password}
                                            type="password"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-dark-red"
                                            placeholder="Contraseña"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input
                                            ref={phone}
                                            type="number"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-red-900"
                                            placeholder="Teléfono"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button
                                        onClick={onSubmit}
                                        className="block w-full max-w-xs mx-auto bg-dark-red hover:bg-red-900 focus:bg-indigo-700 text-white rounded-xl px-3 py-3 font-semibold"
                                    >
                                        REGISTRARME
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register;