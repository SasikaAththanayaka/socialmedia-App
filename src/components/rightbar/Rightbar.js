import "./Rightbar.css";


function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/1.jpg" alt=""/>
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
            </div>
        </div>
    )
}

export default Rightbar
