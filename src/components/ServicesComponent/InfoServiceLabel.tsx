interface InfoServiceProps{
    content: String;
}

function InfoServiceLabel(props: InfoServiceProps){
    return(
        <div className='flex flex-row gap-2 mt-2'>
            <div className='bg-blue-ufal px-4 py-2 rounded-full text-white-100 text-sm'>{props.content}
            </div>
        </div>
    )
}
export default InfoServiceLabel;