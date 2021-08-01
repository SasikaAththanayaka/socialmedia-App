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
                <div className="postCenter">
                    <span className="postText">This is my first Post</span>
                    <img clssName="postImg" src="./assets/post/1.jpg" alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="./assets/1.jpg" alt=""/>
                        <img className="likeIcon" src="./assets/2.jpg" alt=""/>
                        <span className="postlikeCounter">22 peopele like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
