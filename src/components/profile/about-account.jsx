import { TitleDetails } from "../title"
import AuthorContactDetails from "./author-contact-details"
import Community from "./community"


export default function AboutAccount({ author, address, biography, location, websiteLink, yearJoined, numberSubscriptions,  numberSubscribers}){
    return(
        <div className="about-account">
             <div>
                <h3 className="author-name">{author}</h3>
                <TitleDetails value={address} />
              </div>
              <div>
                <span>{biography}</span>
              </div>
              <AuthorContactDetails location={location} websiteLink={websiteLink} yearJoined={yearJoined} />
              <Community numberSubscriptions={numberSubscriptions} numberSubscribers={numberSubscribers} />
        </div>
    )
}