import { LocationIcon } from "../../icon";

export default function Location({place}){
    if(place){
        return(
                <div className="icon-separator-and-profile-details">
                    <LocationIcon /> <span>{place}</span>
                </div>
            )
    }
}