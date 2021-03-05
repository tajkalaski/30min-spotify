import styled from "styled-components";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useStateValue } from "./../context";
import SongRow from "./SongRow";

const StyledWrapper = styled.div`
  padding: 30px;
  width: 100%;
  height: 80vh;
  overflow-y: overlay;
  flex: 0.8;
  color: white;
  background: linear-gradient(transparent, #121212);
  background-color: #515151;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const BodyInfo = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
`;

const BodyInfoContent = styled.div`
  flex: 1;
  text-align: left;
  padding-left: 8px;
`;

const StyledHeading = styled.h2`
  font-size: 48px;
  margin-bottom: 10px;
`;

const StyledParagraph = styled.p`
  font-size: 14px;
`;

const StyledTitle = styled.strong`
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 1.2px;
`;

const BodyIconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img`
  height: 20vw;
  margin-right: 20px;
  box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
`;
const BodySongs = styled.div`
  z-index: 1;
  margin: 20px -30px;
`;

const PlayIcon = styled(PlayCircleFilledIcon)`
  font-size: 80px !important;
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 20px;

  :hover {
    transition: 100ms transform ease-in;
    transform: scale(1.08);
  }
`;

const IconWrapper = styled.span`
  margin-right: 20px;
`;
const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useStateValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcLFGEv1HYHvX`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <StyledWrapper>
      <Header spotify={spotify} />
      <BodyInfo>
        <StyledImg src={discover_weekly?.images[0].url} />
        <BodyInfoContent>
          <StyledTitle>Playlist</StyledTitle>
          <StyledHeading>Discover Weekly</StyledHeading>
          <StyledParagraph>{discover_weekly?.description}</StyledParagraph>
        </BodyInfoContent>
      </BodyInfo>
      <BodySongs>
        <BodyIconsWrapper>
          <IconWrapper>
            <PlayIcon onClick={playPlaylist} />
          </IconWrapper>
          <IconWrapper>
            <FavoriteIcon fontSize="large" />
          </IconWrapper>
          <IconWrapper>
            <MoreHorizIcon />
          </IconWrapper>
        </BodyIconsWrapper>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </BodySongs>
    </StyledWrapper>
  );
};

export default Body;
