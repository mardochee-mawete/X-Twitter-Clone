export default function Avatar({className,source}){
    if(source){
        return(
            <div className={className}>
                <img src={source} alt="avatar" />
            </div>
        )
    }  
}