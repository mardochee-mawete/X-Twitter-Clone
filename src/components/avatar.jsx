export default function Avatar({source}){
    if(source){
        return(
            <div className="avatar">
                <img src={source} alt="avatar" />
            </div>
        )
    }  
}