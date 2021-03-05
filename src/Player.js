import styled from "styled-components";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const PlayerWrapper = styled.div`
  display: flex;
`;

const Player = ({ spotify }) => {
  return (
    <div>
      <PlayerWrapper>
        <Sidebar />
        <Body spotify={spotify} />
      </PlayerWrapper>
      <Footer spotify={spotify} />
    </div>
  );
};

export default Player;
