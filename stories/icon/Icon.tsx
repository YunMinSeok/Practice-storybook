/** @jsxImportSource @emotion/react */
import * as icons from "./svg";

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

export type IconProps = {
  /** 사용 할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  color?: string;
  /** 아이콘 크기 */
  size?: string | number;
  className?: string;
};

const Icon = ({ icon, color, size, className }: IconProps) => {
  console.log(icons[icon]);
  const SVGIcon = icons[icon];
  return (
    <SVGIcon
      css={{ fill: color || "currentColor", width: size, height: "auto" }}
      className={className}
    />
  );
};

export default Icon;
