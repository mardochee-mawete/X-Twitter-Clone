import ProfilePhoto from "../avatar"
import { TweetTitleAuthor, TweetTitleDetails } from "../title"
import { PrivateIcon, MoreIconDot } from "../icon"

export default function ProfileSetting(){
    return(
        <div className="profileSetting">
               <ProfilePhoto source="src/images/profile-photo.png" className="profilePhoto-setting"/>
               <div className="title-profileSetting">
                    <div>
                        <TweetTitleAuthor value="Bradley Ortiz"/>
                        <TweetTitleDetails value="@bradley..." />
                    </div>
                    <PrivateIcon />
               </div>
               <MoreIconDot />
        </div>
    )
}