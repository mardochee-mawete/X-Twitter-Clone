export default function Community({numberSubscriptions, numberSubscribers}){
    return(
        <div className="container-subscription-subscriber">
            <div>
                <span>{numberSubscriptions}</span> <span className="tweet-title-details">subscriptions</span>
            </div>
            <div>
                <span>{numberSubscribers}</span> <span className="tweet-title-details">subscribers</span>
            </div>
        </div> 
    )
}