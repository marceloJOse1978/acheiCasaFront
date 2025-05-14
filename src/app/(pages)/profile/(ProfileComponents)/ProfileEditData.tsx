import React from 'react';
import Title from '../(ProfileComponents)/Title';
import ShowInformation from '../(ProfileComponents)/ProfileInformation';
import EditButon from '../(ProfileComponents)/ProfileEditButton';

interface UserData {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  biography?: string;
}

interface DataProps {
  isEditing: boolean;
  user: UserData | null;
  onChange?: (data: UserData) => void; 
}

const ProfileEditData = ({ isEditing, user, onChange }: DataProps) => {
  // Função auxiliar para atualizar um campo específico
  const handleFieldChange = (field: keyof UserData, value: string) => {
    if (onChange && user) {
      onChange({
        ...user,
        [field]: value,
      });
    }
  };

  return (
    <div>
      <Title text="Informações Pessoais" />
      <div className="grid grid-cols-2 gap-[45px] mt-4">
        <ShowInformation
          keyText="Primeiro Nome"
          keyValue={user?.first_name || ''}
          isEditable={isEditing}
          onChange={(val) => handleFieldChange('first_name', val)}
        />
        <ShowInformation
          keyText="Segundo Nome"
          keyValue={user?.last_name || ''}
          isEditable={isEditing}
          onChange={(val) => handleFieldChange('last_name', val)}
        />
        <ShowInformation
          keyText="Endereço de E-mail"
          keyValue={user?.email || ''}
          isEditable={isEditing}
          onChange={(val) => handleFieldChange('email', val)}
        />
        <ShowInformation
          keyText="N° de Telefone"
          keyValue={user?.phone_number || ''}
          isEditable={isEditing}
          onChange={(val) => handleFieldChange('phone_number', val)}
        />
        <ShowInformation
          keyText="Biografia"
          keyValue={user?.biography || ''}
          isEditable={isEditing}
          onChange={(val) => handleFieldChange('biography', val)}
        />
      </div>
    </div>
  );
};

export default ProfileEditData;
