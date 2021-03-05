import { useEffect } from "react";
import styled, { css } from "styled-components";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import { useStateValue } from "./../context";

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  padding: 20px;
  height: 65px;
  width: 97%;
  background-color: #282828;
`;

const CenterWrapper = styled.div`
  flex: 0.4;
  max-width: 300px;
  padding: 0 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: 300px;
  flex: 0.3;
`;
const RightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  flex: 0.3;
`;

const FooterIcon = styled.span`
  ${({ green }) =>
    green &&
    css`
      color: #1ed15e;
    `}
  :hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
  }
`;

const StyledSlider = styled(Slider)`
  &&& {
    color: #1ed15e;
  }
`;

const SongName = styled.h4`
  margin-bottom: 4px;
`;

const SongArtist = styled.p`
  font-size: 12px;
`;

const AlbumLogo = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 20px;
  object-fit: contain;
`;

const SongInfo = styled.div`
  text-align: left;
`;

const Footer = ({ spotify }) => {
  const [{ token, item, playing }, dispatch] = useStateValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
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
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
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
  };

  return (
    <StyledWrapper>
      <LeftWrapper>
        <AlbumLogo
          src={item?.album.images[0].url}
          //   src="https://lastfm.freetls.fastly.net/i/u/300x300/7589f7a6fccd4b2e9e9cb976c93da971.jpg"
          alt={item?.name}
        />
        {item ? (
          <SongInfo>
            <SongName>{item.name}</SongName>
            <SongArtist>
              {item.artists.map((artist) => artist.name).join(", ")}
            </SongArtist>
          </SongInfo>
        ) : (
          <SongInfo>
            <SongName>No song is playing</SongName>
            <SongArtist>...</SongArtist>
          </SongInfo>
        )}
      </LeftWrapper>
      <CenterWrapper>
        <FooterIcon>
          <ShuffleIcon />
        </FooterIcon>
        <FooterIcon>
          <SkipPreviousIcon onClick={skipNext} />
        </FooterIcon>

        {playing ? (
          <FooterIcon green>
            <PauseCircleOutlineIcon fontSize="large" />
          </FooterIcon>
        ) : (
          <FooterIcon green>
            <PlayCircleOutlineIcon fontSize="large" />
          </FooterIcon>
        )}
        <FooterIcon>
          <SkipNextIcon onClick={skipPrevious} />
        </FooterIcon>
        <FooterIcon>
          <RepeatIcon />
        </FooterIcon>
      </CenterWrapper>
      <RightWrapper>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <StyledSlider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </RightWrapper>
    </StyledWrapper>
  );
};

export default Footer;
