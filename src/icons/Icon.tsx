import React, { memo } from "react";
import { IIconProps } from "../global/types";
import { getIconsMap, TIcon } from "./iconsMap";

interface IGenerateIconProps extends IIconProps {
  iconName: TIcon;
}

const Icon: React.FC<IGenerateIconProps> = ({
  iconName,
  width,
  height,
  color,
}: IGenerateIconProps): JSX.Element => {
  const iconsMap = getIconsMap({ width, height, color });

  const generateIcon = (): React.ReactElement | null => {
    const foundIcon = iconsMap.find(
      (el) => el.iconName === iconName
    )?.component;
    return foundIcon || null;
  };
  return <>{generateIcon()}</>;
};

export default memo(Icon);
