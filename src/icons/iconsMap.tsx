import React from "react";
import { IIconProps } from "../global/types";
import EngineeringIcon from "./serviceCards/EngineeringIcon";
import FarmacologyIcon from "./serviceCards/FarmacologyIcon";
import FoodIndustryIcon from "./serviceCards/FoodIndustryIcon";
import LaboratoryIcon from "./serviceCards/LaboratoryIcon";
import MedicineIcon from "./serviceCards/MedicineIcon";

export type TIcon =
  | "engineering"
  | "medicine"
  | "farmacology"
  | "food_industry"
  | "laboratory";

interface IIcons {
  iconName: TIcon;
  component: React.ReactElement<any, any>;
}

export const getIconsMap = ({ width, height, color }: IIconProps): IIcons[] => [
  {
    iconName: "engineering",
    component: <EngineeringIcon width={width} height={height} color={color} />,
  },
  {
    iconName: "farmacology",
    component: <FarmacologyIcon width={width} height={height} color={color} />,
  },
  {
    iconName: "medicine",
    component: <MedicineIcon width={width} height={height} color={color} />,
  },
  {
    iconName: "laboratory",
    component: <LaboratoryIcon width={width} height={height} color={color} />,
  },
  {
    iconName: "farmacology",
    component: <FoodIndustryIcon width={width} height={height} color={color} />,
  },
];
