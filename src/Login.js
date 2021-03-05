import styled from "styled-components";
import Button from "./components/Button";
import { accessUrl } from "./spotify";

const StyledWrapper = styled.div`
  display: grid;
  background-color: black;
  height: 100vh;
  place-items: center;
`;

const Logo = styled.img`
  height: 200px;
`;

const Login = () => {
  return (
    <StyledWrapper>
      <Logo src="https://logos-world.net/wp-content/uploads/2020/09/Spotify-Logo.png" />
      <Button href={accessUrl}>Login with Spotify</Button>
    </StyledWrapper>
  );
};

export default Login;
