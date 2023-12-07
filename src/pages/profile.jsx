import { TweetData, TweetImage } from "../components/timeline/tweet"
import Header from "../components/header"
import ProfilePhoto from "../components/avatar"
import Button from "../components/button"

export function ProfileDetails(){
    return(
        <>
            <ProfilePhoto source="src/images/tweet-image.png" className="photo-curvature" />
            <div>
                <ProfilePhoto source="src/images/profile-photo.png" className="photo-profile" />
            </div>
            <div>
              <div className="container-edit-profile-button">
                <Button value="Edit profile" className="button-edit-profile"/>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div> 
            </div>
        </>
    )
}

export default function Profile(){
    return(
        <main className="timeline profile">
            <Header valuePageTitle="Bradley Ortiz"  />
            <ProfileDetails />
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