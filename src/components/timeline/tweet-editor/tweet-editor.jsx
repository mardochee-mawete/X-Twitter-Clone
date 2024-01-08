import Avatar from "../../avatar";
import InputText from "../../input-text";
import TweetEditorButtons from "./tweet-editor-buttons";


 export default function TweetEditor(){
    return(
        <section className="tweet-editor">
            <Avatar source="src/images/profile-photo.png" />
            <div className="tweet-editor-form">
                <form action="">
                    <InputText className="tweet-editor-input" placeholder="What's happening?"/>
                    <TweetEditorButtons />
                </form>
            </div>
        </section>
    )
}