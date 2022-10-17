import { IButtonLinks, ILink, IServiceCard } from "../global/types";
import { HOME_URL } from "../utils/constants";
import { useTranslation } from "react-i18next";

export const useGlobalData = () => {
  const { t } = useTranslation();

  const navLinksData: ILink[] = [
    {
      path: HOME_URL,
      text: t("navLinks.home"),
    },
    {
      path: "/",
      text: t("navLinks.products"),
    },
    {
      path: "/",
      text: t("navLinks.services"),
    },
    {
      path: "/",
      text: t("navLinks.contact"),
    },
  ];

  const buttonLinksData: IButtonLinks = {
    contact: {
      path: "/",
      text: t("buttonLinks.contact"),
    },
    products: {
      path: "/",
      text: t("buttonLinks.products"),
    },
    services: {
      path: "/",
      text: t("buttonLinks.services"),
    },
  };

  const servicesCardsData: IServiceCard[] = [
    {
      icon: "medicine",
      title: t("serviceCards.medicine_title"),
      text: t("serviceCards.medicine_text"),
    },
    {
      icon: "farmacology",
      title: t("serviceCards.farmacology_title"),
      text: t("serviceCards.farmacology_text"),
    },
    {
      icon: "engineering",
      title: t("serviceCards.engineering_title"),
      text: t("serviceCards.engineering_text"),
    },
    {
      icon: "food_industry",
      title: t("serviceCards.food_industry_title"),
      text: t("serviceCards.food_industry_text"),
    },
    {
      icon: "laboratory",
      title: t("serviceCards.laboratory_title"),
      text: t("serviceCards.laboratory_text"),
    },
  ];

  return { navLinksData, buttonLinksData, servicesCardsData };
};
