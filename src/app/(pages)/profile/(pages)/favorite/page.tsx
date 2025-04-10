import MenuProfile from '../../(ProfileComponents)/MenuProfile';

export default function Favorite () {
    return (
        <div className="mx-auto px-4 py-8 mt-[98px]">
            <MenuProfile profile={false} anuncio={false} history={false} favorite={true} title='Gerir Favoritos'/>
        </div>
    )
}