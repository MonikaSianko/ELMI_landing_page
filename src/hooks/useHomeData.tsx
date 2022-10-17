import { useTranslation } from "react-i18next";
import { images } from "../images/images";
import { useGlobalData } from "./useGlobalData";

export const useHomeData = () => {
  const { t } = useTranslation();
  const { buttonLinksData } = useGlobalData();

  const heroData = {
    title: t("hero.title"),
    subtitle: t("hero.subtitle"),
    text: t("hero.text"),
    buttons: [buttonLinksData.contact, buttonLinksData.services],
    image: images.hero,
  };

  const infoData = {
    text: t("info.text"),
    imgAlt: t("info.img_alt"),
    buttons: [buttonLinksData.services],
    image: images.info,
  };

  return { heroData, infoData };
};
