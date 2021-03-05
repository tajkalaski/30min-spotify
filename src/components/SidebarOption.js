import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 40px;
  color: grey;
  transition: 200ms color ease-in;
  padding-top: 8px;

  :hover {
    color: white;
  }
`;

const StyledTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`;

const StyledIcon = styled.span`
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledParagraph = styled.p`
  margin-top: 8px;
  margin-left: 16px;
  font-size: 14px;
  font-weight: 400;
`;

const SidebarOption = ({ option, Icon }) => {
  return (
    <StyledWrapper>
      {Icon && (
        <StyledIcon>
          <Icon />
        </StyledIcon>
      )}
      {Icon ? (
        <StyledTitle>{option}</StyledTitle>
      ) : (
        <StyledParagraph>{option}</StyledParagraph>
      )}
    </StyledWrapper>
  );
};

export default SidebarOption;
