// initial code for screen section
/* 
import React from "react";
import { PureInboxScreen } from "./PureInboxScreen";

export default {
  component: PureInboxScreen,
  title: "PureInboxScreen"
};

export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="Something" />; */

// updated code
import React from "react";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";

import { PureInboxScreen } from "./PureInboxScreen";
import { defaultTasksData } from "./PureTaskList.stories";

export default {
  component: PureInboxScreen,
  title: "PureInboxScreen",
  decorators: [story => <Provider store={store}>{story()}</Provider>]
};

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      tasks: defaultTasksData
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch")
};

export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="Something" />;