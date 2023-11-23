export default function ProfilePhoto({source}){
    return(
        <div className="avatar">
            <img src={source} alt="avatar" />
        </div>
    )
}