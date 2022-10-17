import { TIcon } from "../icons/iconsMap";


export interface IIconProps {
    width?: number;
    height?: number;
    color?: string;
  }


export interface ILink {
path: string;
text: string;
icon?: TIcon;
}
export interface IButtonLinks {
    [key: string] : {
        path: string,
        text: string,
    }
}

export interface IServiceCard {
    icon: TIcon;
    title: string;
    text: string;
}