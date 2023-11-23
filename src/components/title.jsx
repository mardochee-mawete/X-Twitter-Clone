import { TweetTitleIcon } from "./icon";

export function PageTitle({value}){
    return(
        <h2 className="page-title">
            {value}
        </h2>
    )
}

export function TweetTitle({author, address, datePublication}){
    return(
        <div className="tweet-title">
            <h3 className="tweet-title-author">
                {author}
            </h3>
            <TweetTitleIcon />
            <span className="tweet-title-details">
                {address}
            </span>
            <span className="tweet-title-details"> . </span>
            <span className="tweet-title-details">
                {datePublication}
            </span>
        </div>
    )
}