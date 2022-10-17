import React, { memo } from "react";
import { IIconProps } from "../../global/types";

const FarmacologyIcon: React.FC<IIconProps> = ({
  width,
  height,
  color,
}: IIconProps): JSX.Element => {
  return (
    <svg
      width={width ? width : 32}
      height={height ? height : 32}
      viewBox={width && height ? `0 0 ${width} ${height}` : "0 0 32 32"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2305 19.5614H10.2331V17.6865C10.2331 17.3414 9.93494 17.0615 9.56727 17.0615C9.19959 17.0615 8.9015 17.3414 8.9015 17.6865V19.5614H6.90412C6.53644 19.5614 6.23828 19.8413 6.23828 20.1863C6.23828 20.5314 6.53644 20.8113 6.90412 20.8113H8.9015V22.6862C8.9015 23.0313 9.19966 23.3112 9.56727 23.3112C9.93487 23.3112 10.2331 23.0313 10.2331 22.6862V20.8113H12.2305C12.5982 20.8113 12.8963 20.5315 12.8963 20.1863C12.8963 19.8412 12.5982 19.5614 12.2305 19.5614Z"
        fill={color ? color : "#00A6FB"}
      />
      <path
        d="M31.2862 20.124C29.8143 17.7311 26.56 16.9122 24.0103 18.294L21.3058 19.7597V14.3324C21.3058 13.6615 21.0694 12.9957 20.64 12.4575L17.311 8.29124V6.51712C18.0859 6.25912 18.6427 5.56449 18.6427 4.74968V1.87487C18.6425 0.841062 17.7465 0 16.6451 0H4.66066C3.5593 0 2.66322 0.841062 2.66322 1.87487V4.74974C2.66322 5.56443 3.21992 6.25918 3.99483 6.51718V8.2913L0.665571 12.4579C0.236372 12.9957 0 13.6615 0 14.3324V26.4362C0 28.1592 1.49341 29.561 3.32899 29.561H14.0291C15.522 31.9099 18.7411 32.696 21.2644 31.3284L29.3367 26.9536C31.8639 25.5837 32.7654 22.5299 31.2862 20.124ZM3.99483 1.87487C3.99483 1.53025 4.29352 1.24987 4.6606 1.24987H16.6451C17.0122 1.24987 17.3109 1.53025 17.3109 1.87487V4.74974C17.3109 5.09437 17.0122 5.37468 16.6451 5.37468H4.66066C4.29352 5.37468 3.99489 5.09431 3.99489 4.74974V1.87487H3.99483ZM1.73118 13.2074L5.19327 8.87455C5.27969 8.76643 5.32643 8.6348 5.32643 8.49955V6.62468H15.9793V7.87462H9.9871C9.61942 7.87462 9.32126 8.15449 9.32126 8.49962C9.32126 8.84474 9.61942 9.12462 9.9871 9.12462H16.3122L19.5744 13.2072C19.7876 13.4744 19.92 13.7941 19.96 14.1244H1.34579C1.38574 13.794 1.51818 13.4744 1.73118 13.2074ZM3.32905 28.311C2.22769 28.311 1.33168 27.47 1.33168 26.4362V25.805H13.4283C13.2171 26.6153 13.2185 27.4808 13.4603 28.3111H3.32905V28.311ZM13.9505 24.5612H1.33161V15.3742H19.9741V20.4812L15.9379 22.6688C15.0963 23.1252 14.4161 23.7747 13.9505 24.5612ZM20.5987 30.2459C18.6879 31.2816 16.2463 30.6691 15.1422 28.8743C14.0329 27.0622 14.7052 24.7807 16.6039 23.7512L20.2178 21.7926L24.2127 28.2873L20.5987 30.2459ZM28.6709 25.8712L25.3659 27.6623L21.371 21.1675L24.6761 19.3765C26.5881 18.3404 29.0289 18.954 30.1329 20.7489C31.2419 22.5527 30.5675 24.8431 28.6709 25.8712Z"
        fill={color ? color : "#00A6FB"}
      />
    </svg>
  );
};

export default memo(FarmacologyIcon);
