interface Props {
  user: any;
}

export default function ProfileSection({ user }: Props) {
  if (!user) {
    return (
      <div className="mt-[1em] w-[80px] h-[80px] lg:w-[110px] lg:h-[110px] mx-auto select-none mb-[60px]">
        {/* Skeleton Loader */}
        <div className="w-full h-full bg-gray-300 animate-pulse rounded-full"></div>
        <div className="mt-[1em] bg-gray-300 animate-pulse h-[16px] w-1/2 mx-auto rounded"></div>
        <div className="mt-[0.4em] bg-gray-300 animate-pulse h-[12px] w-1/3 mx-auto rounded"></div>
      </div>
    )
  }

  return (
    <div className="mt-[1em]">
      <figure className='w-[80px] h-[80px] lg:w-[110px] lg:h-[110px] rounded-full p-[5px] bg-[#FF453A] shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden mx-auto select-none'>
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
        <p className="font-bold text-[14px] lg:text-[16px] leading-none tracking-none text-center mt-[1em] text-[#000000] select-none">
          {`${user.first_name} ${user.last_name}`}
        </p>
        <p className="font-normal text-[12px] leading-none tracking-none text-center text-[#999999] mt-[0.4em] select-none">
          {user.rule}
        </p>
      </div>
    </div>
  );
}
