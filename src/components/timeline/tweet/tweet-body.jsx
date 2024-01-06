import TweetTitle from "./tweet-title";
import TweetText from "./tweet-text";
import TweetImage from "./tweet-image";

export default function TweetBody({author, tag, datePublication, textContent, sourceImageTweet}){
    return(
        <div className="tweet-body">
            <TweetTitle author={author} tag={tag} datePublication={datePublication}/>
            <TweetText textContent={textContent}/>
            <TweetImage source={sourceImageTweet} />
        </div>
    )
}