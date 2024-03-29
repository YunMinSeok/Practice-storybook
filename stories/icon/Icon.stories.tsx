/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Icon, { iconTypes } from "./Icon";

export default {
  component: Icon,
  title: "components|Icon",
};

type iconProps = {
  story: { name: string };
};

export const icon: iconProps = () => <Icon icon="heart" />;
icon.story = {
  name: "Default",
};

export const customSize = () => <Icon icon="heart" size="4rem" />;

export const customColor = () => <Icon icon="heart" color="red" />;

export const customizedWithStyle = () => (
  <Icon icon="heart" css={{ color: "red", width: "4rem" }} />
);

export const listOfIcons = () => {
  return (
    <ul css={iconListStyle}>
      {iconTypes.map((value) => {
        console.log(value);
        return (
          <li key={value}>
            {icon}
            <Icon icon={value} />
          </li>
        );
      })}
    </ul>
  );
};

const iconListStyle = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;
