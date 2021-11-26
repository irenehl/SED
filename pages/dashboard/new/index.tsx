import shortid from 'shortid';
import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import Layout from '@components/Layout';
import useAxios from 'axios-hooks';
import Loader from '@components/Loader';
import useLocalStorage from '../../../src/hooks/useLocalStorage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewAppointment: NextPage = () => {
    const [token] = useLocalStorage('token');
    const date = useRef(null);
    const doctor = useRef(null);
    const hour = useRef(null);
    const [val, setVal] = useState("Medicina General");

    const [{ data, loading, error }, executePost] = useAxios({
        url: '/api/appointment',
        method: 'POST',
    }, { manual: true })

    function onChangeSelect(e) {
        setVal(e.target.value);
    }

    async function onSubmit(e) {
        e.preventDefault();

        const validate = [
            date?.current?.value,
            val,
            hour?.current?.value
        ]

        if (validate.some(it => it == "")) {
            toast('Llena todos los campos primero', { type: 'warning' });
            return;
        }

        const body = {
            doctor: options.find(it => it.specialty == val).doctor,
            date: `${date?.current?.value} ${hour?.current?.value}`,
            speciality: val
        }

        let res = await executePost({
            data: body,
            headers: {
                Authorize: token.token,
            }
        });

        toast('Cita agendada con exito', {type: 'success'});
    }

    if (loading)
        return <Layout title="Agendar cita"><Loader /></Layout>

    const options = [
        { doctor: 'Juan Perez', specialty: 'Medicina General' },
        { doctor: 'Maria Gomez', specialty: 'Psicologia' },
        { doctor: 'Miguel Gonzalez', specialty: 'Neurologia' },
        { doctor: 'Xiomara Ayala', specialty: 'Cardiologia' },
    ]

    return (
        <Layout title="Agendar cita">
            <ToastContainer />
            <h3 className="text-pink text-3xl font-medium py-6">Dashboard</h3>
            <h3 className="text-pink text-3xl text-center font-medium">Nueva cita</h3>
            <form className="py-24 flex justify-center items-center" onSubmit={onSubmit}>
                <div className="max-w-xl bg-pink text-gray-500 rounded-3xl shadow-xl overflow-hidden">
                    <div className="justify-center">
                        <div className="w-full md:w-full py-10 px-10 items-center justify-center">
                            <div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input ref={date} type="date" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-dark-red" placeholder="Nacimiento" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <select
                                            ref={doctor}
                                            onChange={onChangeSelect}
                                            value={val}
                                            name="select"
                                            id="select"
                                            className="w-full -ml-10 pl-5 pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-dark-red"
                                        >
                                            {
                                                options.map((it) => <option key={shortid.generate()} value={it.specialty}>{ it.doctor }, { it.specialty }</option>)
                                            }
                                        </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input ref={hour} type="time" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-dark-red" placeholder="Contraseña" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <button type="submit"
                                        className="block w-full max-w-xs mx-auto bg-dark-red hover:bg-red-900 focus:bg-indigo-700 text-white rounded-xl px-3 py-3 font-semibold">AGENDARME</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    )
}

export default NewAppointment;