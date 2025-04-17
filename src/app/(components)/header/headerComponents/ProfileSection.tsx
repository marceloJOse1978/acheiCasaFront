import users from '../../../objects/obje';

export default function ProfileSection() {
  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="mt-[1em]">
          <figure className='w-[80px] h-[80px] lg:w-[110px] lg:h-[110px] rounded-full p-[5px] bg-[#FF453A] shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden mx-auto select-none'>
            <img src={user.image} alt={user.name} className="w-full h-full object-cover rounded-full select-none" />
          </figure>
          <div>
            <p className="font-bold text-[14px] lg:text-[16px] leading-none tracking-none text-center mt-[1em] text-[#000000] select-none">{user.name}</p>
            <p className="font-normal text-[12px] leading-none tracking-none text-center text-[#999999] mt-[0.4em] select-none">{user.role}</p>
          </div>
        </div>
      ))}
    </>
  );
}
