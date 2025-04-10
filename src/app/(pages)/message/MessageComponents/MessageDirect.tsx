
'use client'

interface DmCardProps {
    img?: string
    name?: string
    lastMessage?: string
}

const MessageDirect = ({img, name, lastMessage}:DmCardProps) => {
    
    /* const truncatedMessage = lastMessage.length > 10 ? lastMessage.slice(0, 15) + '...' : lastMessage; */
    return (
        <>
            <div  className='flex items-center justify-start gap-2 my-3'>
            <figure className='w-[32px] h-[32px] rounded-[50%] overflow-hidden'>
                <img src="" alt="" className='w-[100%] h-[100%] object-cover' />
            </figure>
            <div>
                <p className='font-bold text-[12px] leading-[100%] tracking-[0%] capitalize text-gray-400'>{name}</p>
                <p className='mt-1 font-normal text-[10px] leading-[100%] tracking-[0%] capitalize text-gray-300'>esxemplo</p>
            </div>
            </div>
        </>
    )
}

export default MessageDirect
