import Avatar from "../avatar"
import Pseudo from "../pseudo"
import Username from "../username"
import { PrivateIcon, MoreIconDot } from "../icon"

export default function ProfileSetting(){
    return(
        <div className="profile-setting">
               <Avatar source="src/images/profile-photo.png" />
               <div className="profile-setting-body">
                    <div>
                        <Pseudo value="Bradley Ortiz" />
                        <Username value="@bradley..." />
                    </div>
                    <PrivateIcon />
               </div>
               <MoreIconDot />
        </div>
    )
}