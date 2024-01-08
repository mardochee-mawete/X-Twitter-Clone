import Button from "../button"
import AccountToFollow  from "./account-to-follow"
import TitleTrends from "./title-trends"

export function FollowList(){
    return(
        <article className="follow-list">
            <div>
                <div className="body-title-follow-list">
                    <TitleTrends value="Who to follow" />
                </div>
                <AccountToFollow sourceProfileFollow="src/images/Tweet-Profile-Photo2.png" authorAccountFollow="The New York Times" addressAccountFollow="@nytimes"/>
                <AccountToFollow sourceProfileFollow="src/images/Tweet-Profile-Photo1.png" authorAccountFollow="CNN" addressAccountFollow="@CNN"/>
                <AccountToFollow sourceProfileFollow="src/images/iconTweeter.png"  authorAccountFollow="Twitter" addressAccountFollow="@Twitter"/>
            </div>
            <div>
                <Button value="Show more" className="show-more-button" />
            </div>
        </article>
    )
}