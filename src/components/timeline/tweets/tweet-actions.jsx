import { ReplyIcon, ReposterIcon, LikeIcon, ShareIcon} from "../../icon";

export default  function TweetActions({valueReply, valueReposter, valueLike, valueShare}){
    return(    
        <div className="tweet-actions">
            <div className="tweet-action">
                <ReplyIcon /> <span>{valueReply}</span>
            </div>
            <div className="tweet-action">
                <ReposterIcon /> <span>{valueReposter}</span>
            </div>
            <div className="tweet-action">
                <LikeIcon /> <span>{valueLike}</span>
            </div>
            <div className="tweet-action">
                <ShareIcon /> <span>{valueShare}</span>
            </div>
        </div>
    )
}