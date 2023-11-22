export function PageTitle({value}){
    return(
        <h2 className="page-title">
            {value}
        </h2>
    )
}

export function TweetTitle({author, details}){
    return(
        <div className="tweet-title">
            <h3 className="tweet-title-author">
                {author}
            </h3>
            <span>icone</span>
            <span className="tweet-title-details">
                {details}
            </span>
        </div>
    )
}