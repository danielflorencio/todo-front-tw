export default function TodoTableHeader(){
    return(
        <div className="border-b flex items-center rounded-t border-purple-400 px-2 py-2">
            <div className="w-24 flex items-center justify-center">
                <p className="font-semibold">Actions</p>
            </div>
            <p className='font-semibold px-2'>Description</p>
        </div>
    )
}