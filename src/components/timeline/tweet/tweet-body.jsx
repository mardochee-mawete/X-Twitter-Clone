import { TweetTitle } from "../../title";
import TweetText from "./tweet-text";
import TweetImage from "./tweet-image";

export default function TweetBody({author, address, datePublication, textContent, sourceImageTweet}){
    return(
        <div className="tweet-body">
            <TweetTitle author={author} address={address} datePublication={datePublication}/>
            <TweetText textContent={textContent}/>
            <TweetImage source={sourceImageTweet} />
        </div>
    )
}