import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listMembers, listEvents } from "../graphql/queries";
import { deleteMember } from "../graphql/mutations";

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
      setMembers(result.data.listMembers.items);
      console.log(result.data);
    }

    // async function fetchEvents() {
    //   const result = await API.graphql(graphqlOperation(listEvents));
    //   console.log(result);
    // }
    fetchMembers();
    // fetchEvents();
  }, []);

  return (
    <div>
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

      <CustomTimeline groups={members} />
    </div>
  );
};

export default TimelineList;
