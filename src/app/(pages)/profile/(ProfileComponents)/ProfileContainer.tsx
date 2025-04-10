export default function ProfileContainer ({children, marginTop}: Readonly<{children: React.ReactNode;marginTop:number;}>) {
    return (
        <div className='
            flex items-start justify-between 
            shadow-lg rounded-lg bg-white py-5 
            px-10 border border-[rbg(283,283,283)]
            mt-5'>
            { children }
        </div> 
    )
}