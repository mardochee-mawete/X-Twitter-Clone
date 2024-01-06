import Avatar from "../avatar"
import Button from "../button"
import { BadgeIcon } from "../icon"
import Pseudo from "../pseudo"
import Username from "../username"


export default function AccountToFollow({sourceProfileFollow, authorAccountFollow, addressAccountFollow}){
    return(
        <div className="account-to-follow">
            <div className="account-details-to-follow">
                <Avatar source={sourceProfileFollow} />
                <div>
                    <div className="body-pseudo-account-to-follow">
                        <Pseudo value={authorAccountFollow}/><BadgeIcon />
                    </div>
                    <Username value={addressAccountFollow}/>
                </div>
            </div>
            <Button value="Follow" className="button-follow"/>
        </div>
    )
}