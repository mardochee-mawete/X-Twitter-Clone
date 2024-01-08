import { BadgeIcon } from "../../icon"
import Pseudo from "../../pseudo"
import Username from "../../username"
import TweetTitleDetails from "./tweet-title-details"

export default function TweetTitle({author, username, datePublication}){
    return(
        <div className="tweet-title">
            <Pseudo value={author} />
            <BadgeIcon />
            <Username value={username}/>
            <TweetTitleDetails value="."/>
            <TweetTitleDetails value={datePublication}/>
        </div>
    )
}