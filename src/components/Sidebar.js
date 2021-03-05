import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "./../context";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.2;
  padding-left: 10px;
  padding-right: 10px;
  min-width: 230px;
  height: 80vh;
  color: white;
  background-color: #040404;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTitle = styled.strong`
  margin-left: 10px;
  padding: 5px;
  font-size: 12px;
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 1.2px;
`;

const StyledLogo = styled.img`
  margin-right: auto;
  object-fit: contain;
  height: 70px;
  padding: 10px;
`;

const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists);
  return (
    <StyledWrapper>
      <StyledLogo
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <StyledTitle>Playlists</StyledTitle>
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </StyledWrapper>
  );
};

export default Sidebar;
