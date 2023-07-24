interface InfoServiceProps{
    content: String;
}

function InfoServiceLabel(props: InfoServiceProps){
    return(
        <div className='mt-2 flex flex-row gap-2'>
            <div className='rounded-full bg-blue-ufal px-4 py-2 text-sm text-white-100'>{props.content}
            </div>
        </div>
    )
}
export default InfoServiceLabel;