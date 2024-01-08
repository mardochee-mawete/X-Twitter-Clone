import { CalendarIcon } from "../../icon";

export default function YearAccountOpened({date}){
    if({date}){
        return(
            <div className="icon-separator-and-profile-details">
                <CalendarIcon />
                <span> Joined Twitter in {date}</span>
            </div>
        )
    }
}