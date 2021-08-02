import "./Post.css";
import {MoreVert} from "@material-ui/icons";
import {Users} from "../../dummyData";
import { useState } from "react";
function Post({post}) {

    const users =Users.filter(u=>u.id===post.userId);
    const [like,setLike]=useState(post.like);
    const [isLiked,setIsLiked]=useState(false);
    const likeHandler =() =>{
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={users[0]?.profilePic} alt=""/>
                        <span className="postUserName">{users[0]?.userName}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post?.photo}alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="./assets/12.jpg" onClick={likeHandler} alt=""/>
                        <img className="likeIcon" src="./assets/22.jpg" onClick={likeHandler} alt=""/>
                        <span className="postlikeCounter">{like} peopele like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
