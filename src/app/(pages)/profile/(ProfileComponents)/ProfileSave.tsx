
import React from 'react';
import ProfileEditButton from './ProfileEditButton';
import { Ban, Save } from 'lucide-react';

const ProfileSave = () => {
  return (
    <div>
        <ProfileEditButton icon={Save} text='Salvar'  />
        <ProfileEditButton icon={Ban } text='Cancelar' />
    </div>
  );
};

export default ProfileSave;
