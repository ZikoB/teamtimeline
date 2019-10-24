/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMember = `mutation CreateMember($input: CreateMemberInput!) {
  createMember(input: $input) {
    id
    title
  }
}
`;
export const updateMember = `mutation UpdateMember($input: UpdateMemberInput!) {
  updateMember(input: $input) {
    id
    title
  }
}
`;
export const deleteMember = `mutation DeleteMember($input: DeleteMemberInput!) {
  deleteMember(input: $input) {
    id
    title
  }
}
`;
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
    id
    title
    group {
      id
      title
    }
    start_time
    end_time
  }
}
`;
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
    id
    title
    group {
      id
      title
    }
    start_time
    end_time
  }
}
`;
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
    id
    title
    group {
      id
      title
    }
    start_time
    end_time
  }
}
`;
