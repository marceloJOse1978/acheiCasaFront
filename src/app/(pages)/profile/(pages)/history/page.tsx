import MenuProfile from '../../(ProfileComponents)/MenuProfile';

export default function History () {
    return (
        <div className="mx-auto px-4 py-8 mt-[98px]">
            <MenuProfile profile={false} anuncio={false} history={true} favorite={false} title='Ver Histórico'/>
        </div>
    )
}