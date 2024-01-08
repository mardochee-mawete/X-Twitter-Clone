export default function TweetImage({source}){
    if(source){
        return(
            <div className="tweet-image">
                <img src={source} alt="tweet image" />
            </div>
        )
    }
}