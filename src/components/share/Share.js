import "./Share.css";
import {PermMedia} from "@material-ui/icons";

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="./assets/person/17.jpg" alt=""/>
                    <input placeholder="What's in your mind sasi?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className="shareIcon"/>
                            <span className="shareOptionText">Photo Or Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share;
