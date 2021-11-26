import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import { useRouter } from 'next/router';

const Layout: FunctionComponent<{ title: string }> = ({ children, title = null }) => {
    const history = useRouter();

    function onLogout() {
        history.push('/login')
        localStorage.removeItem('token')
    }
    
    return (
        <div>
            {
                title && (
                    <Head>
                        <title>{ title }</title>
                    </Head>
                )
            }
            <div className="flex h-screen bg-gray-200">
            <Navbar/>
                <div className="flex-1 flex flex-col overflow-hidden">
                    <header className="flex justify-between items-center py-4 px-6 bg-dark-red border-b-4 border-pink">
                        <div className="flex items-center"></div>
                        <div>
                            <div className="relative cursor-pointer flex items-center space-x-5" onClick={onLogout}>
                                <span className="font-bold text-pink">Cerrar sesion</span>
                                <div className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-pink" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546
                                        2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-dark-red">
                        { children }
                    </main>
                </div>
            </div>
</div>
    )
};

export default Layout;
