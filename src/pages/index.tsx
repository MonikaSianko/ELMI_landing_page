import { graphql } from "gatsby";
import * as React from "react";
import Header from "../components/Header/Header";
import { useHomeData } from "../hooks/useHomeData";
import Icon from "../icons/Icon";

const IndexPage = () => {
  const { infoData } = useHomeData();
  return (
    <h1>
      <Icon iconName="engineering" />
      <Header />
      <img src={infoData.image} alt={infoData.imgAlt} />
    </h1>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
