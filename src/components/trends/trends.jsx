import Search from "./search"
import { TrendingList } from "./trending-list"
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