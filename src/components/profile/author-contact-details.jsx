import { CalendarIcon, LinkIcon, LocationIcon } from "../icon"
import { TitleDetails } from "../title"
import DisplayCoordinate from "./display-coordinate"


export default function AuthorContactDetails({location, websiteLink, yearJoined}){
    return(
        <div className="author-contact-details">
            <DisplayCoordinate coordinate={location}>
                <LocationIcon />
                <TitleDetails value={location} />
            </DisplayCoordinate>
            <DisplayCoordinate coordinate={websiteLink}>
                <LinkIcon />
                <a href="#" target="_blank">{websiteLink}</a>
            </DisplayCoordinate>
            <DisplayCoordinate>
                <CalendarIcon />
                <div><TitleDetails value="Joined Twitter in January" /> <TitleDetails value={yearJoined} /></div>
            </DisplayCoordinate>
        </div>
    )
}