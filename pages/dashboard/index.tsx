import type { NextPage } from 'next';
import Navbar from './navbar';
import Layout from '@components/Layout';

const Index: NextPage = () => {
    return (
        <Layout>
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
                                            Fecha</th>
                                        <th
                                            className="px-6 py-3 border-b border-gray-200 bg-pink text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                            Hora</th>

                                        <th className="px-6 py-3 border-b border-gray-200 bg-pink"></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm leading-5 font-medium text-gray-900">Juan Menendez
                                                    </div>
                                                    <div className="text-sm leading-5 text-gray-500">Psicologo</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 text-gray-900">2020-08-09</div>
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                            11:30</td>
                                        <td
                                            className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                            <a className="text-dark-red"></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm leading-5 font-medium text-gray-900">Juan Menendez
                                                    </div>
                                                    <div className="text-sm leading-5 text-gray-500">Psicologo</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 text-gray-900">2020-08-10</div>
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                            13:45</td>
                                        <td
                                            className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                            <a className="text-dark-red"></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm leading-5 font-medium text-gray-900">Juan Menendez
                                                    </div>
                                                    <div className="text-sm leading-5 text-gray-500">Psicologo</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 text-gray-900">2020-11-10</div>
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                            15:40</td>
                                        <td
                                            className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                            <a className="text-dark-red"></a>
                                        </td>
                                    </tr>
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
