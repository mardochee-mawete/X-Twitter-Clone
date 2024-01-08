import { LinkIcon } from "../../icon"


export default function WebsiteLink({url}){
    if(url){   
        return(
            <div className="icon-separator-and-profile-details">
                <LinkIcon /> <a href="#" target="_blank">{url}</a>
            </div>
        )
    }
}