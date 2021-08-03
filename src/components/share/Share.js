import "./Share.css";
import {PermMedia,Label,Room,EmojiEmotions,ShareOutlined} from "@material-ui/icons";

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="./assets/person/1.jpg" alt=""/>
                    <input placeholder="What's in your mind sasi?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo Or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                        <div className="shareOption">
                            <ShareOutlined htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Share</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share;
