import "./Sidebar.css";
import {RssFeed,Chat,PlayCircleFilledOutlined,Group,HelpOutline,WorkOutline,Event,School,Bookmark} from "@material-ui/icons";
import { Button } from "@material-ui/core";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <Button className="sidebarButton">Show More</Button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFridentList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="./assets/person/2.jpg" alt=" "/>
                        <span className="sidebarFriendName">Sasika Harshana</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="./assets/person/3.jpg" alt=" "/>
                        <span className="sidebarFriendName">Kamal silwa</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="./assets/person/4.jpg" alt=" "/>
                        <span className="sidebarFriendName">Sumith Nisantha</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="./assets/person/5.jpg" alt=" "/>
                        <span className="sidebarFriendName">Sunil Thushan</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="./assets/person/6.png" alt=" "/>
                        <span className="sidebarFriendName">Nimesh</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
