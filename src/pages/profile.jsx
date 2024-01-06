import Header from "../components/header";
import ProfileActions from "../components/profile/profile-actions";
import ProfileEditor from "../components/profile/profile-editor";

function Profile(){
    return(
        <main className="timeline">
            <Header valuePageTitle="Bradley Ortiz" />
            <ProfileEditor />
            <ProfileActions />
        </main>
    )
}

export default Profile;