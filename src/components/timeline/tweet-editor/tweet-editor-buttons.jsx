import TweetEditorActions from "./tweet-editor-actions"
import Button from "../../button";

export default function TweetEditorButtons(){
    return(
      <div className="tweet-editor-buttons">
        <TweetEditorActions />
        <Button value="Tweet" className="button"/>
      </div>  
    )
}