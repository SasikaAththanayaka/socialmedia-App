import "./Post.css";
import {MoreVert} from "@material-ui/icons";
function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="./assets/person/1.jpg" alt=""/>
                        <span className="postUserName">Sasika Harshana</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter"></div>
                <div className="postBottom"></div>
            </div>
        </div>
    )
}

export default Post;
