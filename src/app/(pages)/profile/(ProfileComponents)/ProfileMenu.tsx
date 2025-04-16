import CommunButton from '@/app/(components)/Buttons/CommunButtonLink';


export default function MenuProfile (
    {
        profile, 
        anuncio, 
        history, 
        favorite,
        title
    }: 
    {
        profile:boolean;
        anuncio:boolean; 
        history:boolean;
        favorite:boolean;
        title:string;
    }) {
    return (
        <div className='mb-6 mt-1 flex items-center justify-between'>
            <p className='text-[#000] font-bold text-2xl leading-none tracking-normal'>{title}</p>
           { <ul className="flex items-center justify-start gap-4">
                <li><CommunButton text='Perfil do Usuário' hrefLink='/profile' active={profile} /></li>
                <li><CommunButton text='Meus Anúncios' hrefLink='/profile/announcement' active={anuncio} /></li>
                <li><CommunButton text='Histórico de Negociação' hrefLink='/profile/history' active={history} /></li>
                <li><CommunButton text='Favoritos' hrefLink='/profile/favorite' active={favorite} /></li>
            </ul>}
        </div>
    )
}