"use client";

import users from '../../objects/obje';
import React, { useState, useEffect } from 'react';
import ShowInformation from './(ProfileComponents)/ProfileInformation';
import Title from './(ProfileComponents)/Title';
import MenuProfile from './(ProfileComponents)/ProfileMenu';
import EditButon from './(ProfileComponents)/ProfileEditButton';
import ProfileContainer from './(ProfileComponents)/ProfileContainer'
import Loader from '@/app/(components)/Loader/loader'
import ProfileSave from './(ProfileComponents)/ProfileSave'
import { Pencil } from 'lucide-react';

export default function Profile() {
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    const handleEditClick = () => {
        setIsEditing(prev => !prev);
        console.log("Editar");
    };

    const saveChanges = () => {
        // Add save logic here
        console.log("Saving changes...");
    };

    if (loading) return <Loader />
    return (
        <section className="mx-auto px-4 py-8 mt-[98px]">
            <MenuProfile profile={true} anuncio={false} history={false} favorite={false} title='Editar Perfil' />
            <div>
                <ProfileContainer marginTop={0}>
                    {users.map((user) => (
                        <div key={user.id} className="flex items-center justify-start gap-4">
                            <figure className='w-[130px] h-[130px] rounded-full p-[5px] bg-[#FF453A] shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden select-none'>
                                <img src={user.image} alt={user.name} className="w-full h-full object-cover rounded-full select-none" />
                            </figure>
                            <div>
                                <p className="font-bold text-2x1 leading-none tracking-normal  text-[#000000] select-none">{user.name}</p>
                                <p className='my-[5px] font-normal text-base leading-none tracking-normal text-[#999999] select-none'>{user.role}</p>
                                <p className='font-normal italic text-[13px] leading-none tracking-normal text-[#999999] select-none'>{user.address}</p>
                            </div>

                            <div className="ml-284 h-[130px]">
                                <EditButon text='Editar' icon={Pencil} onClick={handleEditClick} />
                            </div>
                        </div>
                    ))}
                    {/*  <EditButon onClick={handleEditClick} /> */}
                </ProfileContainer>
                <ProfileContainer marginTop={0}>
                    <div className=''>
                        <Title text='Informações Pessoais' />
                        <div className='grid grid-cols-2 gap-[45px] mt-4'>
                            <ShowInformation keyText='Primeiro Nome' keyValue={users[0].firstName} isEditable={isEditing} />
                            <ShowInformation keyText='Segundo Nome' keyValue={users[0].lastName} isEditable={isEditing} />
                            <ShowInformation keyText='Endereço de E-mail' keyValue={users[0].email} isEditable={isEditing} />
                            <ShowInformation keyText='N° de Telefone' keyValue={users[0].phone} isEditable={isEditing} />
                            <ShowInformation keyText='Biografia' keyValue={users[0].bio} isEditable={isEditing} />
                        </div>
                    </div>
                    <div>
                        <EditButon text='Editar' icon={Pencil} onClick={handleEditClick} />
                    </div>

                </ProfileContainer>
                <ProfileContainer marginTop={0}>
                    <div className=''>
                        <Title text='Endereço' />
                        <div className='grid grid-cols-2 gap-[45px] mt-4'>
                            <ShowInformation keyText='Primeiro Nome' keyValue={users[0].country} />
                            <ShowInformation keyText='Segundo Nome' keyValue={users[0].province} />
                            <ShowInformation keyText='Endereço de E-mail' keyValue={users[0].city} />
                            <ShowInformation keyText='N° de Telefone' keyValue={users[0].postalCode} />
                        </div>
                    </div>
                    <EditButon text="Editar" icon={Pencil} onClick={handleEditClick} />
                </ProfileContainer>
            </div>
            
            <div className="flex justify-end gap-4 mt-6">
                               <button className="bg-gray-200 text-black px-6 py-2 rounded-lg shadow">Voltar</button>
                               <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow">Salvar</button>
                           </div>
        </section>
    )
}
/* w-full h-[130px] bg-white rounded-[30px] shadow-[0_0_10px_rgba(0,0,0,0.1)] p-4 select-none */