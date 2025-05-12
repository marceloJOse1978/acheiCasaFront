import React from 'react';
import Title from '../(ProfileComponents)/Title';
import ShowInformation from '../(ProfileComponents)/ProfileInformation';
import EditButon from '../(ProfileComponents)/ProfileEditButton';

interface DataProps {
    isEditing: boolean;
    user: {
      first_name?: string;
      last_name?: string;
      email?: string;
      phone_number?: string;
      biography?: string;
    } | null;
  }
  

const ProfileEditData = ({isEditing, user}: DataProps) => {
  return (
    <>
    <div>
        <Title text='Informações Pessoais' />
        <div className='grid grid-cols-2 gap-[45px] mt-4'>
            <ShowInformation keyText='Primeiro Nome' keyValue={user?.first_name || 'Não disponível'} isEditable={isEditing} />
            <ShowInformation keyText='Segundo Nome' keyValue={user?.last_name || 'Não disponível'} isEditable={isEditing} />
            <ShowInformation keyText='Endereço de E-mail' keyValue={user?.email || 'Não disponível'} isEditable={isEditing} />
            <ShowInformation keyText='N° de Telefone' keyValue={user?.phone_number || 'Não disponível'} isEditable={isEditing} />
            <ShowInformation keyText='Biografia' keyValue={user?.biography || 'Não disponível'} isEditable={isEditing} />
        </div>
    </div>
    </>
  );
};

export default ProfileEditData;
