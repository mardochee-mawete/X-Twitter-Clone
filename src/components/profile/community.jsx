import { TitleDetails } from "../title"


export default function Community({numberSubscriptions, numberSubscribers}){
    return(
        <div className="container-subscription-subscriber">
            <div>
                <span>{numberSubscriptions}</span> <TitleDetails value="subscriptions" />
            </div>
            <div>
                <span>{numberSubscribers}</span> <TitleDetails value="subscribers" />
            </div>
        </div> 
    )
}