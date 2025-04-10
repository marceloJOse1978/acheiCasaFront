import { Pencil } from 'lucide-react';

export default function History () {
    return (
        <button type="button" className='flex items-center justify-center gap-2 bg-[#FF453A] text-white rounded-[30px] py-2 px-4 mt-4  cursor-pointer hover:bg-[#fff] hover:text-[#FF453A] transition border border-[#FF453A]'>
            <span className='font-semibold text-base leading-none tracking-normal text-center'>Editar</span>
            <Pencil />
        </button>
    )
}