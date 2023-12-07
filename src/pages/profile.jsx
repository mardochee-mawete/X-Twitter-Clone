import { TweetData, TweetImage } from "../components/timeline/tweet"
import Header from "../components/header"

export function EditorProfile(){
    return(
        <>
            <div className="photo-curvature">
                <img src="src/images/tweet-image.png" alt="photo curvature" />
            </div>  
            <div>
                <div>
                    <img src="src/images/profile-photo.png" alt="profile photo" />
                </div>
               
            </div>
        </>
    )
}

export default function Profile(){
    return(
        <main className="timeline profile">
            <Header valuePageTitle="Bradley Ortiz"  />
            <EditorProfile />
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
        </main>
    )
}