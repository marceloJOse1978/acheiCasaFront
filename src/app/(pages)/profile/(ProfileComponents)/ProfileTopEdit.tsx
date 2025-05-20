import React from 'react';
import EditButon from './ProfileEditButton';
import { Ban, KeyRound } from 'lucide-react';

interface TopEdit {
  user: any;
  changePassword?: () => void;
}

const ProfileTopEdit = ({user, changePassword}:TopEdit) => {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <>
        <div key={user.id} className="w-full flex items-center justify-between gap-4">
          <div className="flex items-center justify-start gap-4">
            <figure className='w-[130px] h-[130px] rounded-full p-[5px] bg-[#FF453A] shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden select-none'>
                  {user.path_photo ? (
                  <img
                    src={user.path_photo}
                    alt={`Imagem de perfil de ${user.first_name} ${user.last_name}`}
                    className="w-full h-full object-cover rounded-full select-none"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white font-bold bg-gray-400 rounded-full text-[55px]">
                    {user.first_name.charAt(0)} {/* Primeira letra do nome */}
                  </div>
                )}
            </figure>
            <div>
                <p className="font-bold text-2xl leading-none tracking-normal  text-[#000000] select-none">
                  {`${user.first_name} ${user.last_name}`}
                </p>
                <p className='my-[5px] font-normal text-base leading-none tracking-normal text-[#999999] select-none'>{user.rule}</p>
                <p className='font-normal italic text-[13px] leading-none tracking-normal text-[#999999] select-none'>
                {user?.province && user?.municipality
                  ? `${user.province} ${user.municipality}`
                  : 'Localização não disponível'}
              </p>
            </div>
          </div>
          <div>
            <EditButon
                text='Alterar Senha' 
                icon={KeyRound} 
                onClick={changePassword}
            />
          </div>
        </div>
    </>
  );
};

export default ProfileTopEdit;
