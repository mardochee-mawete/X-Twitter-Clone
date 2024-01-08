import Search from "./search"
import { TrendingList } from "./trending-list"
import { FollowList } from "./follow-list"


export default function Trends(){
    return(
        <aside className="trends">
            <Search />
            <TrendingList  />
            <FollowList />
        </aside>
    )
}