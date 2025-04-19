

export default function Anuncio ({active}:{active:boolean}) {
    return (
        <div className={`flex items-center justify-center fixed top-[79px] md:top-[114px] left-0 right-0 bottom-0 bg-black/50 transition-opacity duration-300 z-1000`}>
            <div className="flex items-center justify-center gap-3 h-[150px] w-[300px] bg-[#fff] border border-[#999] rounded-lg">
                <button type="button" className="shadow-md shadow-black/10 rounded py-[6px] px-[12px] text-[16px] font-bold cursor-pointer text-[#fff] bg-green-500">Voltar</button>
                <button type="button" className="shadow-md shadow-black/10 rounded py-[6px] px-[12px] text-[16px] font-bold cursor-pointer text-[#fff] bg-red-500">Sair</button>
            </div>
        </div>
    )
}