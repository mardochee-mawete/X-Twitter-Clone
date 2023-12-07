import { TweetData } from "../components/timeline/tweet"
import Header from "../components/header"
import ProfilePhoto from "../components/avatar"
import Button from "../components/button"
import { TweetTitleDetails } from "../components/title"
import { CalendarIcon, LinkIcon, LocationIcon } from "../components/icon"

export function CheckExistenceOfDataWithImage({children, getValue}){
    if(getValue){
        return(
            <div className="icon-separator-and-profile-details">
                  {children}
            </div>
        )
    }
}

export function ProfileDetails({sourceCoverPhoto, sourceprofilePicture, author, address, biography, location, websiteLink, yearJoined, numberSubscriptions, numberSubscribers}){
    return(
        <>
            <ProfilePhoto source={sourceCoverPhoto} className="photo-curvature" />
            <div>
                <ProfilePhoto source={sourceprofilePicture} className="photo-profile" />
            </div>
            <div className="container-edit-profile-button">
                <Button value="Edit profile" className="button-edit-profile"/>
            </div>
            <div className="about-account">
              <div>
                <h3 className="author-name">{author}</h3>
                <TweetTitleDetails value={address} />
              </div>
              <div>
                <span>{biography}</span>
              </div>
              <div className="author-contact-details">
                <CheckExistenceOfDataWithImage getValue ={location}>
                    <LocationIcon />
                    <TweetTitleDetails value={location} />
                </CheckExistenceOfDataWithImage>
                <CheckExistenceOfDataWithImage getValue ={websiteLink}>
                    <LinkIcon />
                    <a href="#" target="_blank">{websiteLink}</a>
                </CheckExistenceOfDataWithImage>
                <CheckExistenceOfDataWithImage getValue ={yearJoined}>
                    <CalendarIcon />
                    <div>
                        <TweetTitleDetails value="Joined Twitter in January" /> <TweetTitleDetails value={yearJoined} />
                    </div>
                </CheckExistenceOfDataWithImage>
              </div>
              <div className="container-subscription-subscriber">
                <div>
                    <span>{numberSubscriptions}</span> <TweetTitleDetails value="subscriptions" />
                </div>
                <div>
                    <span>{numberSubscribers}</span> <TweetTitleDetails value="subscribers" />
                </div>
              </div> 
            </div>
        </>
    )
}

export function ProfileAction(){
    return(
        <div className="profle-actions">
            <div className="profle-action">
                <span className="postes">Postes</span>
            </div>
            <div className="profle-action">
                <span>Answers</span>
            </div>
            <div className="profle-action">
                <span>Featured tweets</span>
            </div>
            <div className="profle-action">
                <span>Media</span>
            </div>
            <div className="profle-action">
                <span>likes</span>
            </div>
        </div>
    )
}
export default function Profile(){
    return(
        <main className="timeline profile">
            <Header valuePageTitle="Bradley Ortiz"  />
            <ProfileDetails
             sourceCoverPhoto="src/images/tweet-image.png"
             sourceprofilePicture="src/images/profile-photo.png"
             author="Bradley Ortiz"
             address ="@bradleyOrtiz"
             biography="Programming"
             location="Kinshasa"
             websiteLink="www.mawete.com"
             yearJoined="2018"
             numberSubscriptions="15"
             numberSubscribers="8"
            />
            <ProfileAction />
            <TweetData 
                sourceProfilePhoto="src/images/Tweet-Profile-Photo2.png" 
                author="The New York Times" 
                address="@nytimes" 
                datePublication="2h"
                textContent =''
                sourceImageTweet ="src/images/tweet-image.png"
                valueReply = "19"
                valueReposter ="48"
                valueLike ="482"
                valueShare=""
            />
             <TweetData 
                sourceProfilePhoto="src/images/profile-photo.png"
                author="Bradley Ortiz"
                address="@bradleyOrtiz"
                datePublication="Oct 4"
                textContent ='hello literally everyone'
                sourceImageTweet ="src/images/tweet-image.png"
                valueReply = "118.7K"
                valueReposter ="785.4K"
                valueLike ="3.3M"
                valueShare=""
            />
            <TweetData 
                sourceProfilePhoto="src/images/profile-photo.png"
                author="Bradley Ortiz"
                address="@bradleyOrtiz"
                datePublication="Oct 15"
                textContent ='hello literally everyone'
                sourceImageTweet =""
                valueReply = "48.7K"
                valueReposter ="785.4K"
                valueLike ="2M"
                valueShare=""
            />
            <TweetData 
                sourceProfilePhoto="src/images/profile-photo.png"
                author="Bradley Ortiz"
                address="@bradleyOrtiz"
                datePublication="Oct 11"
                textContent ='hello literally everyone'
                sourceImageTweet =""
                valueReply = "8.7K"
                valueReposter ="5.4K"
                valueLike ="1k"
                valueShare=""
            />
            <TweetData 
                sourceProfilePhoto="src/images/profile-photo.png"
                author="Bradley Ortiz"
                address="@bradleyOrtiz"
                datePublication="Oct 18"
                textContent ='hello literally everyone'
                sourceImageTweet ="src/images/tweet-image.png"
                valueReply = "118.7K"
                valueReposter ="785.4K"
                valueLike ="3.3M"
                valueShare="2"
            />
            <TweetData 
                sourceProfilePhoto="src/images/profile-photo.png"
                author="Bradley Ortiz"
                address="@bradleyOrtiz"
                datePublication="Oct 14"
                textContent ='hello literally everyone'
                sourceImageTweet =""
                valueReply = "18.7K"
                valueReposter ="7.4K"
                valueLike ="1.2M"
                valueShare=""
            />
        </main>
    )
}