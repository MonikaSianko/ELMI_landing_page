import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { ILink } from "../../global/types";
import { useGlobalData } from "../../hooks/useGlobalData";
import Icon from "../../icons/Icon";
import Logo from "../Logo/Logo";

const StyledHeader = styled.div``;

const Header: React.FC = (): JSX.Element => {
  const { navLinksData } = useGlobalData();
  return (
    <StyledHeader>
      <Logo />
      <nav>
        {navLinksData.map((link, index) => (
          <Link to={link.path} key={`${link.text}_${index}`}>
            {link.icon && <Icon iconName={link.icon} />}
            {link.text}
          </Link>
        ))}
      </nav>
    </StyledHeader>
  );
};

export default Header;
