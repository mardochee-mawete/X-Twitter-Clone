import { SettingIcon} from "../icon"
import Button from "../button"
import TrendLists from "./trend-lists"
import TitleTrends from "./title-trends"


export function TrendingList(){
    return(
        <article className="trending-list">
            <div>
                <div className="body-title-trending-list">
                    <TitleTrends value="Trends for you" />
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
        </article>
    )
}