import React from "react";
import { withAuthenticator } from "aws-amplify-react";

import CustomTimeline from "./components/CustomTimeline";
import "react-calendar-timeline/lib/Timeline.css";
import MemberForm from "./components/MemberForm";
import TimelineList from "./components/TimelineList";

function App() {
  return (
    <div className="App">
      <TimelineList />
      <MemberForm />
    </div>
  );
}

export default withAuthenticator(App);
