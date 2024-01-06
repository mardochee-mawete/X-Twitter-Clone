import { MoreIconDot } from "../icon"


export default function TrendLists({subtitle,tag, countTweet}){
    return(
        <div className="trend-lists">
            <ul>
                <li className="subtitle">{subtitle}</li>
                <li className="tag-trend">{tag}</li>
                <li className="countTweet">{countTweet}</li>
            </ul>
            <MoreIconDot />
        </div>
    )
}