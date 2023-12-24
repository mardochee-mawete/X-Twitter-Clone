import tweetData from "../../../data/tweet-data";
import TweetData from "./tweet-data";

export default function Tweet(){
    return(
      <>
        {
            tweetData.map(tweet =>(
                <TweetData 
                    keyTweet ={tweet.id}
                    sourceProfilePhoto ={tweet.sourceProfilePhoto } 
                    author ={tweet.author}
                    address ={tweet.address}
                    datePublication ={tweet.datePublication}
                    textContent ={tweet.textContent}
                    sourceImageTweet ={tweet.sourceImageTweet}
                    valueReply = {tweet.valueReply}
                    valueReposter ={tweet.valueReposter}
                    valueLike ={tweet.valueLike}
                    valueShare={tweet.valueShare}
                />
            ))
        }
      </>
    )
}