import Avatar from "../avatar";
import AboutAccount from "./about-account";
import ProfileCoverImage from "./profile-cover-image";
import ProfileEditorButton from "./profile-edit-button";
import userData from "../../data/user-data";

export default function ProfileEditor(){
    return(
        <>
            {
                userData.map(user =>(
                    <>
                    <ProfileCoverImage source={user.sourceCoverPhoto} />
                    <Avatar source={user.sourceprofilePicture} className="profile-picture"/>
                    <ProfileEditorButton />
                    <AboutAccount author={user.userName} address={user.address} biography={user.biography} location={user.location} websiteLink={user.websiteLink} yearJoined={user.yearJoined} numberSubscriptions={user.numberSubscriptions}  numberSubscribers={user.numberSubscribers} />
                    </>           
                ))
            } 
        </>
    )
}