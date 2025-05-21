'use client'

import React from 'react'
import Title from '../(ProfileComponents)/Title';
import ShowInformation from '../(ProfileComponents)/ProfileInformation';
import ProfileEditList from './ProfileListCountry'
import ProfileListCountry from './ProfileListCountry';


// Define apenas os campos usados neste componente
interface UserDataAddress {
  country?: string;
  province?: string;
  municipality?: string;
  postal_code?: string;
}

interface DataProps {
  isEditing: boolean;
  user: UserDataAddress | null;
  onChange?: (data: UserDataAddress) => void;
}

const ProfileEditDataAddress = ({ isEditing, user, onChange }: DataProps) => {

  const handleFieldChange = (field: keyof UserDataAddress, value: string) => {
    if (onChange && user) {
      onChange({
        ...user,
        [field]: value,
      });
    }
  };

  return (
    <div>
      <Title text="Endereço" />
      <div className="grid grid-cols-2 gap-[45px] mt-4">
      <ProfileListCountry
        keyText="País de Origem"
        value={user?.country || ''}
        isEditable={isEditing}
        onChange={(val) => handleFieldChange('country', val)}
      />
        {/* <ShowInformation
          keyText="País de Origem"
          keyValue={user?.country || ''}
          isEditable={isEditing}
          onChange={(val) => handleFieldChange('country', val)}
        /> */}
        <ShowInformation
          keyText="Província"
          keyValue={user?.province || ''}
          isEditable={isEditing}
          onChange={(val) => handleFieldChange('province', val)}
        />
        <ShowInformation
          keyText="Município"
          keyValue={user?.municipality || ''}
          isEditable={isEditing}
          onChange={(val) => handleFieldChange('municipality', val)}
        />
        <ShowInformation
          keyText="Caixa Postal"
          keyValue={user?.postal_code || ''}
          isEditable={isEditing}
          onChange={(val) => handleFieldChange('postal_code', val)}
        />
      </div>
    </div>
  );
};

export default ProfileEditDataAddress;
