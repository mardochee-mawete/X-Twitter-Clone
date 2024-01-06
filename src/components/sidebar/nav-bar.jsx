import { NavLink } from "react-router-dom/dist"
import { HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon, BookmarksIcon, ListsIcon, ProfileIcon, TwitterIcon, MoreIcon } from "../icon"

export default function NavBar(){
    return(
        <nav>
            <ul className="navigation-list">
                <li>  
                    <NavLink to='/' className="nav-link">
                        <TwitterIcon />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="nav-link">
                        <HomeIcon /> <span className="link-name">Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink  className="nav-link">
                        <ExploreIcon /> <span className="link-name">Explore</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink  className="nav-link">
                        <NotificationsIcon /> <span className="link-name">Notifications</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink  className="nav-link">
                        <MessagesIcon /> <span className="link-name">Messages</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink  className="nav-link">
                        <BookmarksIcon /> <span className="link-name">Bookmarks</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link">
                        <ListsIcon /> <span className="link-name">Lists</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/profile' className="nav-link">
                        <ProfileIcon /> <span className="link-name">Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='' className="nav-link">
                        <MoreIcon /> <span className="link-name">More</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}