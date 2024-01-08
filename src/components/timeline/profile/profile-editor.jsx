import Username from "../../username";
import Biography from "./biography";
import ProfileCoverImage from "./profile-cover-image";
import ProfileEditorButton from "./profile-edit-button";
import ProfileName from "./profile-name";
import ProfilePhoto from "./profile-photo";
import UserContactDetails from "./user-contact-details";

export default function ProfileEditor({coverImage, profilePhoto, pseudo, username, biography, location, websiteLink, yearJoined}){
    return(
        <>
            <ProfileCoverImage source={coverImage} />
            <ProfilePhoto source={profilePhoto} />
            <ProfileEditorButton />
            <>
                <ProfileName name={pseudo} />
                <Username value={username} />
            </>
            <Biography value={biography}/>
            <UserContactDetails location={location} websiteLink={websiteLink} yearJoined={yearJoined}/>     
        </>
    )
}