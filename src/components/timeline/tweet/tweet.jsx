import tweetData from "../../../data/tweet-data";
import Avatar from "../../avatar"
import TweetBody from "./tweet-body"
import TweetActions from "./tweet-actions"


export default function Tweet(){
    return(
      <>
        {
            tweetData.map(tweet =>(
              <div className="tweet" key={tweet.id}>
                <Avatar source={tweet.sourceProfilePhoto } />
                <div className="tweet-content">
                    <TweetBody author={tweet.author} tag={tweet.tag} datePublication={tweet.datePublication} textContent={tweet.textContent} sourceImageTweet={tweet.sourceImageTweet}/>
                    <TweetActions valueReply={tweet.valueReply} valueReposter={tweet.valueReposter} valueLike={tweet.valueLike} valueShare={tweet.valueShare}/>
                </div>
              </div>
            ))
        }
      </>
    )
}