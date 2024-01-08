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
                        <HomeIcon /> <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink  className="nav-link">
                        <ExploreIcon /> <span>Explore</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink  className="nav-link">
                        <NotificationsIcon /> <span>Notifications</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink  className="nav-link">
                        <MessagesIcon /> <span>Messages</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink  className="nav-link">
                        <BookmarksIcon /> <span>Bookmarks</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link">
                        <ListsIcon /> <span>Lists</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/profile' className="nav-link">
                        <ProfileIcon /> <span>Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='' className="nav-link">
                        <MoreIcon /> <span>More</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}