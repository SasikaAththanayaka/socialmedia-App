import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";
import {Posts} from "../../dummyData";
function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {Posts.map(data=>(
                    <Post key={data.id} post={data}/>
                ))}
 
            </div>
          </div>
    )
}

export default Feed;
