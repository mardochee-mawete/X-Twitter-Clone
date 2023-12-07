import ProfilePhoto from "../avatar";
import { ReplyIcon, ReposterIcon, LikeIcon, ShareIcon} from "../icon";
import { TweetTitle } from "../title";

export function TweetText({textContent}){
    return(
        <span className="tweet-text">
            {textContent}
        </span>
    )
}

export function TweetImage({source}){
    if(source){
        return(
            <div className="tweet-image">
                <img src={source} alt="tweet image" />
            </div>
        )
    }
}

export function TweetBody({author, address, datePublication, textContent, sourceImageTweet}){
   
    return(
        <div className="tweet-body">
            <TweetTitle author={author} address={address} datePublication={datePublication}/>
            <TweetText textContent={textContent}/>
            <TweetImage source={sourceImageTweet} />
        </div>
    )
}

export function TweetActions({valueReply, valueReposter, valueLike, valueShare}){
    return(    
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
    )
}

export function TweetData({sourceProfilePhoto, author, address, datePublication, textContent, sourceImageTweet, valueReply, valueReposter, valueLike, valueShare }){
    return(
        <div className="tweet">
            <ProfilePhoto source={sourceProfilePhoto } className="tweet-avatar"/>
            <div className="tweet-content">
                <TweetBody author={author} address={address} datePublication={datePublication} textContent={textContent} sourceImageTweet={sourceImageTweet}/>
                <TweetActions valueReply={valueReply} valueReposter={valueReposter} valueLike={valueLike} valueShare={valueShare}/>
            </div>
        </div>
    )
}

function Tweet(){
    return(
        <>
            <TweetData 
                sourceProfilePhoto="src/images/Tweet-Profile-Photo1.png" 
                author="CNN" 
                address="@CNN" 
                datePublication="7m"
                textContent ='President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.'
                sourceImageTweet =""
                valueReply = "57"
                valueReposter ="144"
                valueLike ="184"
                valueShare=""
            />
              <TweetData 
                sourceProfilePhoto="src/images/Tweet-Profile-Photo2.png" 
                author="The New York Times" 
                address="@nytimes" 
                datePublication="2h"
                textContent ='Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land'
                sourceImageTweet ="src/images/tweet-image.png"
                valueReply = "19"
                valueReposter ="48"
                valueLike ="482"
                valueShare=""
            />
            <TweetData 
                sourceProfilePhoto="src/images/iconTweeter.png" 
                author="Twitter" 
                address="@Twitter" 
                datePublication="Oct 29"
                textContent ='BIG NEWS lol jk still Twitter'
                sourceImageTweet =""
                valueReply = "6.8K"
                valueReposter ="36.6K"
                valueLike ="267.1K"
                valueShare=""
            />
             <TweetData 
                sourceProfilePhoto="src/images/iconTweeter.png" 
                author="Twitter" 
                address="@Twitter" 
                datePublication="Oct 4"
                textContent ='hello literally everyone'
                sourceImageTweet =""
                valueReply = "118.7K"
                valueReposter ="785.4K"
                valueLike ="3.3M"
                valueShare=""
            />
              <TweetData 
                sourceProfilePhoto="src/images/iconTweeter.png" 
                author="Twitter" 
                address="@Twitter" 
                datePublication="Oct 4"
                textContent ='hello literally everyone'
                sourceImageTweet ="src/images/tweet-image.png"
                valueReply = "118.7K"
                valueReposter ="785.4K"
                valueLike ="3.3M"
                valueShare=""
            />
        </>
    )
}
export default Tweet;