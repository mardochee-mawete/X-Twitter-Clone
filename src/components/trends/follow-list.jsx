import ProfilePhoto from "../avatar"
import Button from "../button"
import { BadgeIcon } from "../icon"


export function AccountFollow({sourceProfileFollow, authorAccountFollow, addressAccountFollow}){
    return(
        <div className="account-follow">
            <div className="profile-Autor-follow">
                <ProfilePhoto source={sourceProfileFollow}  className="avatar-follow"/>
                <div>
                    <ul>
                        <li className="tweet-title-author">{authorAccountFollow}   <BadgeIcon /> </li>
                        <li className="tweet-title-details">{addressAccountFollow}</li>
                    </ul>
                </div>
            </div>
            <Button value="Follow" className="button-follow"/>
        </div>
    )
}



export function FollowList(){
    return(
        <div className="follow-list">
            <div className="container-follow-list">
                <div className="container-title-follow-list">
                    <h3>
                        Who to follow
                    </h3>
                </div>
                <AccountFollow sourceProfileFollow="src/images/Tweet-Profile-Photo2.png" authorAccountFollow="The New York Times" addressAccountFollow="@nytimes"/>
                <AccountFollow sourceProfileFollow="src/images/Tweet-Profile-Photo1.png" authorAccountFollow="CNN" addressAccountFollow="CNN"/>
                <AccountFollow sourceProfileFollow="src/images/iconTweeter.png"  authorAccountFollow="Twitter" addressAccountFollow="@Twitter"/>
            </div>
            <div>
                <Button value="Show more" className="show-more-button" />
            </div>
        </div>
    )
}