"use client";

import React, { useState, useEffect } from 'react';
import MenuProfile from './(ProfileComponents)/ProfileMenu';
import EditButon from './(ProfileComponents)/ProfileEditButton';
import ProfileContainer from './(ProfileComponents)/ProfileContainer';
import Loader from '@/app/(components)/Loader/loader';
import { Ban, Pencil, Save } from 'lucide-react';
import ProfileTopEdit from './(ProfileComponents)/ProfileTopEdit';
import ProfileEditData from './(ProfileComponents)/ProfileEditData';
import ProfileAddressData from './(ProfileComponents)/ProfileEditDataAddress'
import { USERDATA } from '@/app/Req/ApiUser';
import APIPROFILESAVE from '@/app/Req/ApiProfileSave';
import ChangePasswordModal from './(ProfileComponents)/ProfileChangePass'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile(){
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [formData, setFormData] = useState<any>({});
    const [showPasswordModal, setShowPasswordModal] = useState(false);

    useEffect(() => {
        async function fechUsers(){
            try {
                const object = await USERDATA();
                setUser(object);
                console.log("Dados do user", object);
            } catch(error) {
                console.log("erro ao pergar: ", error);
            }
        }
        fechUsers();
    }, []);

    useEffect(() => {
        if (user?.data) {
            setFormData(user.data);
        }
    }, [user]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleEditClick = () => {
        setIsEditing(prev => !prev);
        console.log("Editar");
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        console.log("cancelar");
    };

    const handleSaveClick = async () => {
        try {
            const result = await APIPROFILESAVE(formData);
    
            if (result.success === true) {
                console.log("Perfil atualizado com sucesso:", result);
                toast.success("Perfil alterado com sucesso.");
                setIsEditing(false);
            } else {
                console.log("Perfil não atualizado com sucesso:", result);
                toast.error("Perfil não atualizado com sucesso.");
    
                if (result.errors) {
                    for (const field in result.errors) {
                        if (Array.isArray(result.errors[field])) {
                            result.errors[field].forEach((msg: string) => {
                                toast.error(`${field}: ${msg}`);
                            });
                        }
                    }
                } else {
                    toast.error("Erro ao atualizar o perfil. Tente novamente.");
                }
            }
    
        } catch (error) {
            console.error("Erro ao salvar perfil:", error);
            toast.error("Erro inesperado ao salvar perfil.");
        }
    };

    const changePassword = () => {
        setShowPasswordModal(true);
      };

    if (loading) return <Loader />;

    const userDataObject = user?.data || {};

    return (
        <section className="mx-auto px-4 py-8 mt-[98px]">
            <ToastContainer />
            <ChangePasswordModal visible={showPasswordModal} onClose={() => setShowPasswordModal(false)} />
            <MenuProfile profile={true} anuncio={false} history={false} favorite={false} title='Editar Perfil' />
            <div>
                <ProfileContainer marginTop={0}>
                    <ProfileTopEdit user={userDataObject} changePassword={changePassword} />
                </ProfileContainer>
                <ProfileContainer marginTop={0}>
                    <ProfileEditData 
                        isEditing={isEditing} 
                        user={formData} 
                        onChange={setFormData}
                    />
                    <div className=''>
                        <EditButon 
                            text={isEditing ? 'Salvar' : 'Editar'}
                            icon={isEditing ? Save : Pencil} 
                            onClick={isEditing ? handleSaveClick : handleEditClick}
                        />
                        <EditButon
                            text='Cancelar' 
                            icon={Ban} 
                            bgColor="#999" 
                            visible={isEditing}
                            onClick={handleCancelClick}
                        />
                       
                    </div>
                </ProfileContainer>
                <ProfileContainer marginTop={0}>
                    <ProfileAddressData  
                        isEditing={isEditing} 
                        user={formData} 
                        onChange={setFormData}
                    /> 
                </ProfileContainer>
            </div>
        </section>
    );
}
