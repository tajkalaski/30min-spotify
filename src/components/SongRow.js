import styled from "styled-components";

const StyledWrapper = styled.div`
  margin-left: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  z-index: 100;
  color: white;

  :hover {
    cursor: pointer;
    background-color: black;
    opacity: 0.8;
  }
`;

const SongInfo = styled.div`
  margin-left: 20px;
  text-align: left;
`;

const StyledTitle = styled.h1`
  font-size: 16px;
`;

const StyledInfo = styled.p`
  font-size: 14px;
  margin-top: 3px;
  color: gray;
`;

const AlbumImg = styled.img`
  height: 40px;
  width: 40px;
`;
const SongRow = ({ track, playSong }) => {
  console.log(track);
  return (
    <StyledWrapper className="songRow" onClick={() => playSong(track.id)}>
      <AlbumImg
        className="songRow__album"
        src={track.album.images[0].url}
        alt=""
      />
      <SongInfo className="songRow__info">
        <StyledTitle>{track.name}</StyledTitle>
        <StyledInfo>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </StyledInfo>
      </SongInfo>
    </StyledWrapper>
  );
};

export default SongRow;
