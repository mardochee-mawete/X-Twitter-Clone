import NavBar from "./nav-bar"
import Button from "../button"
import ProfileSetting from "./profile-setting"

export default function Sidebar(){
    return(
        <div className="sidebar">
            <NavBar />
            <Button value="Tweet" className="button tweet-button-xl"/>
            <ProfileSetting />
        </div>
    )
}