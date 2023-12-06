import { HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon, BookmarksIcon, ListsIcon, ProfileIcon, TwitterIcon, MoreIcon } from "../icon"

export default function NavBar(){
    return(
        <nav className="nav-bar">
            <ul className="list-navigation">
                <li>  
                    <TwitterIcon />
                </li>
                <li>
                    <HomeIcon /> <span>Home</span>
                </li>
                <li>
                    <ExploreIcon /> <span>Explore</span>
                </li>
                <li>
                    <NotificationsIcon /> <span>Notifications</span>
                </li>
                <li>
                    <MessagesIcon /> <span>Messages</span>
                </li>
                <li>
                    <BookmarksIcon /> <span>Bookmarks</span>
                </li>
                <li>
                    <ListsIcon /> <span>Lists</span>
                </li>
                <li>
                    <ProfileIcon /> <span>Profile</span>
                </li>
                <li>
                    <MoreIcon /> <span>More</span>
                </li>
            </ul>
        </nav>
    )
}