import { Pencil } from 'lucide-react';
import users from './obje'; 
import ShowInformation from './profileComponents/litleComponents/ShowInformation';
import Title from './profileComponents/litleComponents/title';
import CommunButton from '@/app/(components)/buttons/communButon';

export default function Profile(){
    return (
        <section className="mx-auto px-4 py-8 mt-[98px]">
            <div className='mb-6 mt-1 flex items-center justify-between'>
                <p className='text-[#000] font-bold text-2xl leading-none tracking-normal'>Ediar Perfil</p>
                <ul className="flex items-center justify-start gap-4">
                    <li><CommunButton text='Perfil do Usuário' hrefLink='#' active={true} /></li>
                    <li><CommunButton text='Meus Anúncios' hrefLink='#' active={false} /></li>
                    <li><CommunButton text='Histórico de Negociação' hrefLink='#' active={false} /></li>
                    <li><CommunButton text='favoritos' hrefLink='#' active={false} /></li>
                </ul>
            </div>
            <div>
                <div className='flex items-center justify-between shadow-lg rounded-lg bg-white py-5 px-10 border border-[rbg(238,238,238)]'>
                    {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-start gap-4">
                        <figure className='w-[130px] h-[130px] rounded-full p-[5px] bg-[#FF453A] shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden select-none'>
                            <img src={user.image} alt={user.name} className="w-full h-full object-cover rounded-full select-none" />
                        </figure>
                        <div>
                            <p className="font-bold text-2xl leading-none tracking-normal  text-[#000000] select-none">{user.name}</p>
                            <p className="my-[5px] font-normal text-base leading-none tracking-normal text-[#999999] select-none">{user.role}</p>
                            <p className='font-normal italic text-[13px] leading-none tracking-normal text-[#999999]'>{user.address}</p>
                        </div>
                    </div>
                    ))}
                    <button type="button" className='flex items-center justify-center gap-2 bg-[#FF453A] text-white rounded-[30px] py-2 px-4 mt-4  cursor-pointer hover:bg-[#fff] hover:text-[#FF453A] transition border border-[#FF453A]'>
                        <span className='font-semibold text-base leading-none tracking-normal text-center'>Editar</span>
                        <Pencil />
                    </button>
                </div>
                <div className='flex items-start justify-between shadow-lg rounded-lg bg-white py-5 px-10 border border-[rbg(283,283,283)] mt-5'>
                    <div>
                        <Title text='Informações Pessoais' />
                        <div className='grid grid-cols-2 gap-[45px] mt-4'>
                            <ShowInformation keyText='Primeiro Nome' keyValue={users[0].firstName} />
                            <ShowInformation keyText='Segundo Nome' keyValue={users[0].lastName} />
                            <ShowInformation keyText='Endereço de E-mail' keyValue={users[0].email} />
                            <ShowInformation keyText='N° de Telefone' keyValue={users[0].phone} />
                            <ShowInformation keyText='Biografia' keyValue={users[0].bio} />
                        </div>
                    </div>
                    <button type="button" className='flex items-center justify-center gap-2 bg-[#FF453A] text-white rounded-[30px] py-2 px-4 mt-4  cursor-pointer hover:bg-[#fff] hover:text-[#FF453A] transition border border-[#FF453A]'>
                        <span className='font-semibold text-base leading-none tracking-normal text-center'>Editar</span>
                        <Pencil />
                    </button>
                </div>
                <div className='flex items-start justify-between shadow-lg rounded-lg bg-white py-5 px-10 border border-[rbg(283,283,283)] mt-5'>
                    <div>
                        <Title text='Endereço' />
                        <div className='grid grid-cols-2 gap-[45px] mt-4'>
                            <ShowInformation keyText='Primeiro Nome' keyValue={users[0].country} />
                            <ShowInformation keyText='Segundo Nome' keyValue={users[0].province} />
                            <ShowInformation keyText='Endereço de E-mail' keyValue={users[0].city} />
                            <ShowInformation keyText='N° de Telefone' keyValue={users[0].postalCode} />
                        </div>
                    </div>
                    <button type="button" className='flex items-center justify-center gap-2 bg-[#FF453A] text-white rounded-[30px] py-2 px-4 mt-4  cursor-pointer hover:bg-[#fff] hover:text-[#FF453A] transition border border-[#FF453A]'>
                        <span className='font-semibold text-base leading-none tracking-normal text-center'>Editar</span>
                        <Pencil />
                    </button>
                </div>
            </div>

        </section>
    )
}