import { SettingIcon} from "../icon"
import Button from "../button"
import TrendLists from "./trend-lists"


export function TrendingList(){
    return(
        <div className="trending-list">
            <div>
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