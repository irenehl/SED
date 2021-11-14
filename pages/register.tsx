import type { NextPage } from 'next';

const Register: NextPage = () => {
    return (
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
                                        <input className="w-full -ml-10 pl-10 pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-red-900" placeholder="Nombre Completo" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-red-900" placeholder="Correo Electrónico" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <div className="relative">
                                            <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
                                                <input value="Genero" name="select" id="select" className="px-4 appearance-no w-full -ml-10 pl-10 pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-dark-red checked" />
                                                <label htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600">
                                                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <polyline points="18 15 12 9 6 15"></polyline>
                                                    </svg>
                                                </label>
                                            </div>
                                            <input type="checkbox" name="show_more" id="show_more" className="hidden peer" checked />
                                            <div className="absolute rounded-xl shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200">
                                                <div className="cursor-pointer group">
                                                    <a className="block p-2 border-transparent border-l-4 group-hover:red-900 group-hover:bg-gray-100">Femenino</a>
                                                </div>
                                                <div className="cursor-pointer group border-t">
                                                    <a className="block p-2 border-transparent border-l-4 group-hover:red-900 border-dark-red group-hover:bg-gray-100">Masculino</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input type="date" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-dark-red" placeholder="Nacimiento" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-dark-red" placeholder="Contraseña" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-red-900" placeholder="Confirme contraseña" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-red-900" placeholder="Teléfono" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button className="block w-full max-w-xs mx-auto bg-dark-red hover:bg-red-900 focus:bg-indigo-700 text-white rounded-xl px-3 py-3 font-semibold">REGISTRARME</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;