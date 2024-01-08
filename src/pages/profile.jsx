import Header from "../components/header";
import AboutProfile from "../components/timeline/profile/about-profile";
import ProfileActions from "../components/timeline/profile/profile-actions";

function Profile(){
    return(
        <main className="timeline">
            <Header valuePageTitle="Bradley Ortiz" />
            <AboutProfile />
            <ProfileActions />
        </main>
    )
}

export default Profile;