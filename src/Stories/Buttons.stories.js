import React from "react";
import { within, userEvent } from "@storybook/testing-library";

import { SigButton } from "../Components/GlobalComponents";

export default {
  title: "Example/sigButton",
  component: SigButton,
  argTypes:{
    circle:{control:boolean}
  }
};

const Template = (args) => <SigButton {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole("button", { name: /Log in/i });
  await userEvent.click(loginButton);
};
