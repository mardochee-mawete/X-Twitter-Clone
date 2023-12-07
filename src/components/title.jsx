import { BadgeIcon } from "./icon";

export function PageTitle({value}){
    return(
        <h2 className="page-title">
            {value}
        </h2>
    )
}

export function TweetTitleAuthor({value}){
    return(
        <h3 className="tweet-title-author">
            {value}
        </h3>
    )
}
export function TweetTitleDetails({value}){
    return(
        <span className="tweet-title-details">
            {value}
        </span>
    )
}

export function TweetTitle({author, address, datePublication}){
    return(
        <div className="tweet-title">
            <TweetTitleAuthor value={author}/>
            <BadgeIcon />
            <TweetTitleDetails value={address}/>
            <TweetTitleDetails value="."/>
            <TweetTitleDetails value={datePublication}/>
        </div>
    )
}