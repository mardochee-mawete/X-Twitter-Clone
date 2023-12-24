import { MediaIcon, GifIcon, PollIcon, EmojiIcon, ScheduleIcon} from "../../icon";

export default function TweetEditorActions(){
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