import Avatar from "../../avatar"
import TweetBody from "./tweet-body"
import TweetActions from "./tweet-actions"


export default function TweetData({keyTweet, sourceProfilePhoto, author, address, datePublication, textContent, sourceImageTweet, valueReply, valueReposter, valueLike, valueShare }){
    return(
        <div className="tweet" key={keyTweet}>
            <Avatar source={sourceProfilePhoto } className="tweet-avatar"/>
            <div className="tweet-content">
                <TweetBody author={author} address={address} datePublication={datePublication} textContent={textContent} sourceImageTweet={sourceImageTweet}/>
                <TweetActions valueReply={valueReply} valueReposter={valueReposter} valueLike={valueLike} valueShare={valueShare}/>
            </div>
        </div>
    )
}