import { BadgeIcon } from "../../icon"
import Pseudo from "../../pseudo"
import Username from "../../username"
import TweetTitleDetails from "./tweet-title-details"

export default function TweetTitle({author, tag, datePublication}){
    return(
        <div className="tweet-title">
            <Pseudo value={author} />
            <BadgeIcon />
            <Username value={tag}/>
            <TweetTitleDetails value="."/>
            <TweetTitleDetails value={datePublication}/>
        </div>
    )
}