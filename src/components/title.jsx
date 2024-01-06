
export function PageTitle({value}){
    return(
        <h2 className="page-title">
            {value}
        </h2>
    )
}

export function AuthorTitle({value}){
    return(
        <h3 className="tweet-title-author">
            {value}
        </h3>
    )
}
export function TitleDetails({value}){
    return(
        <span className="tweet-title-details">
            {value}
        </span>
    )
}