import MenuProfile from '../../(ProfileComponents)/MenuProfile';
import ProfileContainer from '../../(ProfileComponents)/ProfileContainer';

export default function Anuncio () {
    return (
        <div className="mx-auto px-4 py-8 mt-[98px]">
            <MenuProfile profile={false} anuncio={true} history={false} favorite={false} title='Gerir Anúncios'/>
            <ProfileContainer marginTop={0}>
                <p className='text-[#000]'>Anuncio</p>
            </ProfileContainer>
        </div>
    )
}