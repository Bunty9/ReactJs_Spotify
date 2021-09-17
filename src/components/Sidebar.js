import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useStateValue } from "../StateProvider";

function Sidebar() {
	const [{ playlists }] = useStateValue();
	// console.log(playlists);

	return (
		<div className="sidebar">
			<img
				className="sidebar__logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt=""
			/>
			<SidebarOption Icon={HomeIcon} option="Home" />
			<SidebarOption Icon={SearchIcon} option="Search" />
			<SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
			<br />
			<SidebarOption Icon={AddBoxIcon} option="New Playlist" />
			<SidebarOption Icon={FavoriteIcon} option="Your Likes" />
			<br />
			<hr />
			{playlists?.items?.map((playlist, i) => (
				<SidebarOption key={i} option={playlist.name} />
			))}
		</div>
	);
}

export default Sidebar;
