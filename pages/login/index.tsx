import type { NextPage } from 'next';

const SignIn: NextPage = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-dark-red">
            <form className="p-10 bg-pink rounded-xl flex justify-center items-center flex-col shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-dark-red mb-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546
                    2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                </svg>
                <p className="mb-5 text-3xl text-dark-red">Inicio de sesión</p>
                <input type="email" name="email" className="mb-5 p-3 w-80 focus:red-900 rounded-xl border-2 outline-none" autoComplete="off" placeholder="Correo electrónico" required/>
                <input type="password" name="password" className="mb-5 p-3 w-80 focus:red-900 rounded-xl border-2 outline-none" autoComplete="off" placeholder="Contraseña" required/>
                <button className="bg-dark-red hover:bg-red-900 text-white font-bold p-2 rounded-xl w-80" id="login" type="submit"><span>Login</span></button>
            </form>
        </div>
    )
}

export default SignIn;