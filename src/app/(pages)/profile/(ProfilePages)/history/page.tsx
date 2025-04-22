"use client"
import { useState, useEffect } from 'react';
import MenuProfile from '../../(ProfileComponents)/ProfileMenu';
import ProfileContainer from '../../(ProfileComponents)/ProfileContainer';
import EditButon from '@/app/(pages)/profile/(ProfileComponents)/ProfileEditButton';
import Loader from '@/app/(components)/Loader/loader'
import { Pencil } from 'lucide-react';
import ProfileButton from '@/app/(pages)/profile/(ProfileComponents)/ProfileEditButton';

export default function History() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    const handleEditClick = () => {
        console.log('Edit button clicked');
    }

    const negotiations = [
        { id: 1, name: 'Ana Teca', time: '12:10 AM', status: 'Finalizada', image: '/default.jpg' },
        { id: 2, name: 'Ana Teca', time: '12:10 AM', status: 'Em Andamento', image: '/default.jpg' },
        { id: 3, name: 'Ana Teca', time: '12:10 AM', status: 'Em Andamento', image: '/default.jpg' },
    ];

    const payments = [
        { id: 1, name: 'Ana Teca', value: '250.000,00 AOA', time: '12:10 AM', image: '/user.jpg' },
        { id: 2, name: 'Ana Teca', value: '250.000,00 AOA', time: '12:10 AM', image: '/user.jpg' },
        { id: 3, name: 'Ana Teca', value: '250.000,00 AOA', time: '12:10 AM', image: '/user.jpg' },
    ];

    if (loading) return <Loader />
    return (
        <div>
            <div className="mx-auto px-5 py-9 mt-[98px]">
                <MenuProfile profile={false} anuncio={false} history={true} favorite={false} title='Ver Histórico' />
                <div className="mt-10 bg-white rounded-[30px] shadow-[0_0_10px_rgba(0,0,0,0.1)] p-4">
                    <p className="text-[#000] font-semibold text-lg mb-4">Lista de Negociação</p>
                    <div className="space-y-5 rounded-[30px]">
                        {negotiations.map((negotiation) => (
                            <div
                                key={negotiation.id}
                                className="w-full bg-white rounded-[30px] shadow-[0_0_10px_rgba(0,0,0,0.1)] px-5 py-2 flex flex-wrap items-center justify-between gap-4">

                                <img src={negotiation.image}
                                    alt={negotiation.name}
                                    className="w-10 h-10 rounded-full object-cover" />

                                <div className="flex items-center gap-3 min-w-[415px]">
                                    <div>
                                        <p className="text-sm text-[#999999]">
                                            Negociou com <span className="font-semibold">{negotiation.name}</span></p>
                                        <p className="text-xs text-[#999999]">{negotiation.time}</p>
                                    </div>
                                </div>

                                <div className="min-w-[120px] text-center">
                                    <p className={`text-sm font-medium mr-165 ${negotiation.status === 'Finalizada' ? 'text-green-500' : 'text-[#999]'}`}>
                                        {negotiation.status}
                                    </p>
                                </div>
                                <div className="flex items-center min-h-[10px]">
                                    <EditButon text='Editar' icon={Pencil} onClick={handleEditClick} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pagamento e Recebimentos */}
            <div className="mt-2 bg-white rounded-[30px] shadow-[0_0_10px_rgba(0,0,0,0.1)] p-4">
                <div className="flex justify-between items-center mt-4">
                    <p className="text-[#000] font-semibold text-lg">Pagamento e Recebimentos</p>
                </div>
                <div className="space-y-2">
                    <div className="px-375 justify-between ">
                        <EditButon text="Editar" icon={Pencil} onClick={handleEditClick} />
                    </div>
                    {payments.map((payment) => (
                        <div key={payment.id}>
                            <div className="w-180 bg-white rounded-[30px] shadow-[0_0_10px_rgba(0,0,0,0.1)] px-5 py-4 flex flex-wrap items-center justify-between">
                                <div className="flex items-center gap-3 min-w-[200px]">
                                    <img src={payment.image}
                                        alt={payment.name}
                                        className="w-10 h-10 rounded-full object-cover" />
                                    <p className="text-sm text-[#999999]">
                                        <span className="font-semibold">{payment.name}</span> efectuou um pagamento de{' '}
                                        <span className="font-bold">{payment.value}</span> na sua conta
                                    </p>
                                </div>
                                <p className="text-xs text-[#999999] min-w-[80px] text-right">{payment.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}