import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listMembers, listEvents } from "../graphql/queries";
import { deleteMember } from "../graphql/mutations";

import EventForm from "./EventForm";
import CustomTimeline from "./CustomTimeline";

const TimelineList = () => {
  const [members, setMembers] = useState([]);
  const [events, setEvents] = useState([]);

  const handleDeleteMember = async memberId => {
    const input = { id: memberId };
    const result = await API.graphql(graphqlOperation(deleteMember, { input }));
    const deletedMemberId = result.data.deleteMember.id;
    const updatedMembers = members.filter(
      member => member.id !== deletedMemberId
    );
    setMembers(updatedMembers);
  };

  // const hasExistingMember = () => {
  //   if (id) {
  //     const isMember = members.findIndex(member => member.id === id) > -1;
  //     return isMember;
  //   }
  // };

  // const handleUpdateMember = ({ name, id }) => {
  //   setMembers;
  // };

  useEffect(() => {
    async function fetchMembers() {
      const result = await API.graphql(graphqlOperation(listMembers));
      let memberList = result.data.listMembers.items;
      setMembers(memberList);
    }

    async function fetchEvents() {
      const result = await API.graphql(graphqlOperation(listEvents));
      let eventList = result.data.listEvents.items;
      let eventsListTransform = [];
      for (let i = 0; i < eventList.length; i++) {
        const startDate = Date.parse(eventList[i].start_time);
        const endDate = Date.parse(eventList[i].end_time);
        eventsListTransform.push
      }
      setEvents(eventList);

      console.log(eventList);
    }

    fetchMembers();
    fetchEvents();
  }, []);

  return (
    <div>
      <h4>Delete Member</h4>
      {members.map(member => {
        return (
          <div key={member.id} style={{ display: "flex" }}>
            <p>{member.title}</p>
            <button
              style={{ height: "8px" }}
              type="button"
              onClick={() => handleDeleteMember(member.id)}
            >
              X
            </button>
          </div>
        );
      })}
      <EventForm groups={members} />
      <CustomTimeline groups={members} events={events} />
    </div>
  );
};

export default TimelineList;
