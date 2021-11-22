import type { NextPage } from 'next';
import Layout from '@components/Layout';

const NewAppointment: NextPage = () => {
    return (
        <Layout>
            <h3 className="text-pink text-3xl font-medium py-6">Dashboard</h3>
            <h3 className="text-pink text-3xl text-center font-medium">Nueva cita</h3>
            <div className="py-24 flex justify-center items-center">
                <div className="max-w-xl bg-pink text-gray-500 rounded-3xl shadow-xl overflow-hidden">
                    <div className="justify-center">
                        <div className="w-full md:w-full py-10 px-10 items-center justify-center">
                            <div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
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
                                            <input type="time" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-dark-red" placeholder="Contraseña" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <button className="block w-full max-w-xs mx-auto bg-dark-red hover:bg-red-900 focus:bg-indigo-700 text-white rounded-xl px-3 py-3 font-semibold">AGENDARME</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default NewAppointment;