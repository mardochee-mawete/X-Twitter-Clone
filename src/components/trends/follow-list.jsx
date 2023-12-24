import Button from "../button"
import AccountToFollow  from "./account-to-follow"

export function FollowList(){
    return(
        <div className="follow-list">
            <div className="container-follow-list">
                <div className="container-title-follow-list">
                    <h3>
                        Who to follow
                    </h3>
                </div>
                <AccountToFollow sourceProfileFollow="src/images/Tweet-Profile-Photo2.png" authorAccountFollow="The New York Times" addressAccountFollow="@nytimes"/>
                <AccountToFollow sourceProfileFollow="src/images/Tweet-Profile-Photo1.png" authorAccountFollow="CNN" addressAccountFollow="CNN"/>
                <AccountToFollow sourceProfileFollow="src/images/iconTweeter.png"  authorAccountFollow="Twitter" addressAccountFollow="@Twitter"/>
            </div>
            <div>
                <Button value="Show more" className="show-more-button" />
            </div>
        </div>
    )
}