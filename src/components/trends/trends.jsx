import Search from "./search"
import { TrendingList } from "./trendingList"
import { FollowList } from "./follow-list"



export default function Trends(){
    return(
        <div className="trends">
            <Search />
            <TrendingList  />
            <FollowList />
        </div>
    )
}