import type { NextPage } from 'next';
import Head from 'next/head';

const Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>Bienvenido</title>
            </Head>
            <div className="w-screen h-screen flex justify-center items-center bg-dark-red">
                <form className="p-10 bg-pink rounded-xl flex justify-center items-center flex-col shadow-md">
                    <p className="mb-5 text-3xl text-dark-red">Bienvenido</p>
                    <a className="bg-dark-red hover:bg-red-900 text-white font-bold p-2 text-center rounded-xl w-80" id="login" href='/login'>
                        <span>Inicio de sesión</span>
                    </a>
                    <a className="bg-dark-red hover:bg-red-900 text-white my-6 font-bold p-2 text-center rounded-xl w-80" id="login" href='/register'><span>Registro</span></a>
                </form>
            </div>
        </>
    )
}

export default Index;
