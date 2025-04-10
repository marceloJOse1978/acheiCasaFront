import MenuProfile from '../../(ProfileComponents)/MenuProfile';

export default function Anuncio () {
    return (
        <div className="mx-auto px-4 py-8 mt-[98px]">
            <MenuProfile profile={false} anuncio={true} history={false} favorite={false} title='Gerir Anúncios'/>
        </div>
    )
}