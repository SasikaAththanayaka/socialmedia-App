import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

function Profile() {
    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className="profileCoverImg" src="assets/post/4.jpg" alt=""/>
                        <img className="profileUserImg" src="assets/person/1.jpg" alt=""/>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Sasika Aththanayaka</h4>
                        <span className="profileInfoDesc">Hello My friends!</span>
                    </div>
                </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div>
        </div>
    </>
    )
}

export default Profile;
