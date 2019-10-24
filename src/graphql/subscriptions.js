/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMember = `subscription OnCreateMember {
  onCreateMember {
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
export const onUpdateMember = `subscription OnUpdateMember {
  onUpdateMember {
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
export const onDeleteMember = `subscription OnDeleteMember {
  onDeleteMember {
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
