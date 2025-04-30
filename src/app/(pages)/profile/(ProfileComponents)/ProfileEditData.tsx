
import React from 'react';
import Title from '../(ProfileComponents)/Title';
import ShowInformation from '../(ProfileComponents)/ProfileInformation';

const ProfileEditData = () => {
  return (
    <>
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
    </>
  );
};

export default ProfileEditData;
