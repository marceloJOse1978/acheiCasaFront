import MenuProfile from '../../(ProfileComponents)/MenuProfile';
import ProfileContainer from '../../(ProfileComponents)/ProfileContainer';

export default function History () {
    return (
        <div className="mx-auto px-4 py-8 mt-[98px]">
            <MenuProfile profile={false} anuncio={false} history={true} favorite={false} title='Ver Histórico'/>
            <ProfileContainer marginTop={0}>
                <p className='text-[#000]'>Hisórico</p>
            </ProfileContainer>
        </div>
    )
}