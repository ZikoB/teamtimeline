/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMember = `query GetMember($id: ID!) {
  getMember(id: $id) {
    id
    title
    events {
      items {
        id
        title
        start_time
        end_time
      }
      nextToken
    }
  }
}
`;
export const listMembers = `query ListMembers(
  $filter: ModelMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      events {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    title
    group {
      id
      title
      events {
        nextToken
      }
    }
    start_time
    end_time
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      group {
        id
        title
      }
      start_time
      end_time
    }
    nextToken
  }
}
`;
