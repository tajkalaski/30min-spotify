import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "./../context";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const LeftWrapper = styled.div`
  flex: 0.5;
  display: flex;
  background-color: white;
  padding: 10px;
  border-radius: 30px;
  color: gray;
  align-items: center;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
`;

const StyledUserName = styled.h4`
  margin-left: 10px;
`;

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <StyledWrapper>
      <LeftWrapper>
        <SearchIcon />
        <StyledInput
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </LeftWrapper>
      <RightWrapper>
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <StyledUserName>{user?.display_name}</StyledUserName>
      </RightWrapper>
    </StyledWrapper>
  );
};

export default Header;
