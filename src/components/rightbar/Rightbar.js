import "./Rightbar.css";
import {Cake} from "@material-ui/icons";

function Rightbar({profile}) {
    const HomeRight=() =>{
        return(
            <>
            <div className="birthdayContainer">
                    <Cake htmlColor="tomato" className="birthdayImg"/>
                    <span className="birthdayText">
                        {" "}
                       <b>Hasika</b>  And <b>3 Other</b> have their birthday Today
                    </span>
                </div>
                <img  className="rightbarAd"src="assets/3.jpg" alt=""/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendLiat">
                    <li className="rightbarFriend">
                        <div className="rightProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/person/4.jpg" alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">Surangi de silva</span>
                    </li>
                </ul>
        </>
        );
    }

    const ProfileRightbar =() =>{
        return(
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarinfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City :</span>
                        <span className="rightbarInfoValue">Kegalla</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From :</span>
                        <span className="rightbarInfoValue">Mawanella</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship :</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle"></h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="assets/person/2.jpg" alt=""/>
                        <span className="rightbarFollowingName">sas</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="assets/person/3.jpg" alt=""/>
                        <span className="rightbarFollowingName">sas</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="assets/person/4.jpg" alt=""/>
                        <span className="rightbarFollowingName">sas</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="assets/person/5.jpg" alt=""/>
                        <span className="rightbarFollowingName">sas</span>
                    </div>
                </div>
            </>
        );
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <ProfileRightbar/>
            </div>
        </div>
    )
}

export default Rightbar
