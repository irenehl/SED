import { generate } from 'shortid';
import type { NextPage } from 'next';
import Loader from '@components/Loader';
import Layout from '@components/Layout';
import useAxios from 'axios-hooks';
import Head from 'next/head';
import useLocalStorage from '../../src/hooks/useLocalStorage';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Row = ({ info }) => {
    const { doctor, date, speciality, createdAt } = info;
    
    return (
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                    <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">{ doctor }
                        </div>
                        <div className="text-sm leading-5 text-gray-500">{ speciality }</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{ new Date(createdAt).toLocaleDateString() }</div>
            </td>
            <td
                className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                { date }
            </td>
            <td
                className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
            </td>
        </tr>
    );
}

const Index: NextPage = () => {
    const history = useRouter();
    const [token] = useLocalStorage('token');

    useEffect(() => {
        if (!token)
            history.push('/');
    })

    const [{ data, loading, error }, refetch] = useAxios({
        url: '/api/appointment',
        headers: {
            Authorize: token?.token, 
        }
    });

    if (loading)
        return (
            <Layout>
                <Loader />
            </Layout>
        )

    return (
        <Layout title="Mis citas">
            <div className="container mx-auto px-6 py-8">
                <h3 className="text-pink text-3xl font-medium">Dashboard</h3>
                <h3 className="text-pink text-3xl text-center font-medium">Mi historial</h3>
                <div className="mt-8"></div>
                <div className="flex flex-col mt-8">
                    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div
                            className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-pink">
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-6 py-3 border-b border-gray-200 bg-pink text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                            Doctor Encargado</th>
                                        <th
                                            className="px-6 py-3 border-b border-gray-200 bg-pink text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                            Creada en</th>
                                        <th
                                            className="px-6 py-3 border-b border-gray-200 bg-pink text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                            Fecha de cita</th>

                                        <th className="px-6 py-3 border-b border-gray-200 bg-pink"></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {
                                        data && data.length > 0 
                                            ? data.map(it => <Row key={generate()} info={it} />)
                                            : <tr><td colSpan={4} className="text-center py-10">Sin citas por el momento</td></tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Index;
