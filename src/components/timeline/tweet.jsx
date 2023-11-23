import ProfilePhoto from "../profile";
import { ReplyIcon, ReposterIcon, LikeIcon, ShareIcon} from "../icon";
import { TweetTitle } from "../title";

function TweetText({textContent}){
    return(
        <span className="tweet-text">
            {textContent}
        </span>
    )
}

function TweetImage({source}){
    return(
        <div className="tweet-image">
            <img src={source} alt="tweet image" />
        </div>
    )
}

function TweetBody({author, address, datePublication, textContent, sourceImageTweet}){
    return(
        <div className="tweet-body">
            <TweetTitle author={author} address={address} datePublication={datePublication}/>
            <TweetText textContent={textContent}/>
            <TweetImage source={sourceImageTweet} />
        </div>
    )
}

function TweetActions({valueReply, valueReposter, valueLike, valueShare}){
    <div className="tweet-actions">
        <div className="tweet-action">
            <ReplyIcon />
            <span>
                {valueReply}
            </span>
        </div>
        <div className="tweet-action">
            <ReposterIcon />
            <span>
                {valueReposter}
            </span>
        </div>
        <div className="tweet-action">
            <LikeIcon />
            <span>
                {valueLike}
            </span>
        </div>
        <div className="tweet-action">
            <ShareIcon />
            <span>
                {valueShare}
            </span>
        </div>
    </div>
}

function Data({sourceProfilePhoto, author, address, datePublication, textContent, sourceImageTweet, valueReply, valueReposter, valueLike, valueShare }){
    return(
        <div className="tweet">
            <ProfilePhoto source={sourceProfilePhoto } />
            <div className="tweet-content">
                <TweetBody author={author} address={address} datePublication={datePublication} textContent={textContent} sourceImageTweet={sourceImageTweet}/>
                <TweetActions valueReply={valueReply} valueReposter={valueReposter} valueLike={valueLike} valueShare={valueShare}/>
            </div>
        </div>
    )
}

function Tweet(){
    return(
        <Data sourceProfilePhoto="src/images/tweet-profile-photo.png" author="CNN" address="@CNN" datePublication="7m"/>
    )
}
export default Tweet;