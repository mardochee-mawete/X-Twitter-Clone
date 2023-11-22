import ProfilePhoto from "../profile";
import InputText from "../inputText";
import { MediaIcon, GifIcon, PollIcon, EmojiIcon, ScheduleIcon} from "../icon";
import Button from "../button";

function TweetEditorActions(){
    return(
        <div className="tweet-editor-actions">
            <MediaIcon />
            <GifIcon />
            <PollIcon />
            <EmojiIcon />
            <ScheduleIcon />
        </div>
    )
}

function TweetEditorButtons(){
    return(
      <div className="tweet-editor-buttons">
        <TweetEditorActions />
        <Button value="Tweet" className="button"/>
      </div>  
    )
}

function TweetEditor(){
    return(
        <div className="tweet-editor">
            <div className="avatar">
                <ProfilePhoto source="src/images/profile-photo.png"/>
            </div>
            <div className="tweet-editor-form">
                <form action="">
                    <InputText className="tweet-editor-input" placeholder="What's happening?"/>
                    <TweetEditorButtons />
                </form>
            </div>
           
        </div>
    )
}
export default TweetEditor;