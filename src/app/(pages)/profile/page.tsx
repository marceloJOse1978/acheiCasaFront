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
import { Ban, Pencil, Save } from 'lucide-react';
import ProfileTopEdit from './(ProfileComponents)/ProfileTopEdit'
import {USERDATA} from '@/app/Req/ApiUser'
/* import { useState, useEffect } from 'react' */

export default function Profile(){
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState<any>(null);
  useEffect(()=> {
    async function fechUsers(){
      try {
        const object = await USERDATA();
        setUser(object);
        console.log("Dados do user", object)
      } catch(error) {
        console.log("erro ao pergar: ", error)
      }
    }
    fechUsers()
  }, [])
  const userDataObject = user?.data || null;
  console.log("objecto data", userDataObject)

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

    const handleCancelClick = () => {
        setIsEditing(false);
        console.log("cancelar")
    };

    if (loading) return <Loader />
    return (
        <section className="mx-auto px-4 py-8 mt-[98px]">
            <MenuProfile profile={true} anuncio={false} history={false} favorite={false} title='Editar Perfil' />
            <div>
                <ProfileContainer marginTop={0}>
                    <ProfileTopEdit user={userDataObject} />
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
                    <div className=''>
                        <EditButon 
                            text={isEditing ? 'Salvar' : 'Editar'}
                            icon={isEditing ? Save : Pencil} 
                            onClick={handleEditClick} 
                        />
                        <EditButon
                            text='Cancelar' 
                            icon={Ban} 
                            bgColor="#999" 
                            visible={isEditing} // Só mostra quando está em modo edição
                            onClick={handleCancelClick}
                        />
                        {/* <ProfileSave /> */}
                    </div>
                </ProfileContainer>
                <ProfileContainer marginTop={0}>
                    <div className=''>
                        <Title text='Endereço' />
                        <div className='grid grid-cols-2 gap-[45px] mt-4'>
                            <ShowInformation keyText='Primeiro Nome' keyValue={users[0].country} isEditable={isEditing} />
                            <ShowInformation keyText='Segundo Nome' keyValue={users[0].province} isEditable={isEditing} />
                            <ShowInformation keyText='Endereço de E-mail' keyValue={users[0].city} isEditable={isEditing} />
                            <ShowInformation keyText='N° de Telefone' keyValue={users[0].postalCode} isEditable={isEditing} />
                        </div>
                    </div>
                    {/* <EditButon onClick={handleEditClick} /> */}
                </ProfileContainer>
            </div>
        </section>
    )
}