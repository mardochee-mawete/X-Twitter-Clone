import ProfilePhoto from "../avatar"
import Button from "../button"
import { BadgeIcon } from "../icon"


export default function AccountToFollow({sourceProfileFollow, authorAccountFollow, addressAccountFollow}){
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