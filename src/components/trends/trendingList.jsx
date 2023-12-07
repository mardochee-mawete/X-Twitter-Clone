import { SettingIcon, MoreIconDot } from "../icon"
import Button from "../button"


export function TrendLists({subtitle,tag, countTweet}){
    return(
        <div className="trendLists">
            <ul>
                <li className="tweet-title-details">{subtitle}</li>
                <li className="tag-trend">{tag}</li>
                <li className="tweet-title-details">{countTweet}</li>
            </ul>
            <MoreIconDot />
        </div>
    )
}

export function TrendingList(){
    return(
        <div className="trending-list">
            <div className="container-trending-list">
                <div className="container-title-trending-list">
                    <h3>Trends for you</h3>
                    <SettingIcon />
                </div>
                <TrendLists subtitle="Trending in Turkey" tag="#SQUID" countTweet="2,066 Tweets" />
                <TrendLists subtitle="Trending in Turkey" tag="#SQUID" countTweet="2,066 Tweets" />
                <TrendLists subtitle="Trending in Turkey" tag="#SQUID" countTweet="2,066 Tweets" />
                <TrendLists subtitle="Trending in Turkey" tag="#SQUID" countTweet="2,066 Tweets" />
            </div>
            <div>
                <Button value="Show more" className="show-more-button" />
            </div>
        </div>
    )
}