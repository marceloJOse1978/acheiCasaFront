
import React from 'react';
import ProfileEditButton from './ProfileEditButton';
import { Ban, Save } from 'lucide-react';

interface ProfileSaveProps {
  SaveOnclick?: () => void;
  CancelOnClick?: () => void;
}

const ProfileSave = ({SaveOnclick, CancelOnClick}:ProfileSaveProps) => {
  return (
    <div>
        <ProfileEditButton icon={Save} text='Salvar' onClick={SaveOnclick} />
        <ProfileEditButton icon={Ban } text='Cancelar' onClick={CancelOnClick} />
    </div>
  );
};

export default ProfileSave;
