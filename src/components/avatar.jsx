export default function ProfilePhoto({className,source}){
    return(
        <div className={className}>
            <img src={source} alt="avatar" />
        </div>
    )
}