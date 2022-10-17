import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

const StyledLogo = styled.div``;

const Logo: React.FC = (): JSX.Element => {
  return (
    <StyledLogo>
      <Link to="/">
        <img alt="elmi-logo" className="logo" />
      </Link>
    </StyledLogo>
  );
};

export default Logo;
