import NavBar from "./navBar"
import Button from "../button"
import ProfileSetting from "./profileSetting"

export default function Sidebar(){
    return(
        <div className="sidebar">
            <NavBar />
            <Button value="Tweet" className="button button-nav-tweet"/>
            <ProfileSetting />
        </div>
    )
}