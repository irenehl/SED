import { FunctionComponent } from 'react';
import Link from 'next/link';

const Navbar: FunctionComponent = () => {
    return (
        <div className="fixed inset-y-0 left-0 w-64 transition duration-300 transform bg-dark-red overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
            <div className="flex items-center justify-center mt-8">
                <div className="flex items-center">
                    <a href="/">
                        <img src="https://i.ibb.co/hYFT77R/Get-your-med-logos-transparent.png" alt="Get-your-med-logos-transparent" className='w-full h-16' />
                    </a>
                </div>
            </div>

            <nav className="mt-10">
                    <Link href="/dashboard/">
                        <a className="flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="#000000">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z">
                                </path>
                            </svg>

                            <span className="mx-3 cursor-pointer">Mi Historial</span>
                        </a>
                    </Link>


                    <Link href="/dashboard/new">
                        <a className="flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="#000000">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                            </svg>

                            <span className="mx-3 cursor-pointer">Nueva cita</span>
                        </a>
                    </Link>

                    <Link href="/dashboard/delete">
                        <a className="flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="#000000">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                                </path>
                            </svg>

                            <span className="mx-3 cursor-pointer">Borrar cita</span>
                        </a>
                    </Link>

            </nav>
        </div>
    )
}

export default Navbar;