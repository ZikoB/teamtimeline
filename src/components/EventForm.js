import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

import { useForm } from "react-form";
import { InputField, SelectField } from "./InputField";
import { createEvent } from "../graphql/mutations";
import moment from "moment";

function EventForm() {
  // Memoize some default values
  const defaultValues = React.useMemo(
    () => ({
      title: "New Event",
      member: "",
      startDate: moment(),
      endDate: moment().add(1, "hour"),
    }),
    []
  );

  let events = [];

  // Use the useForm hook to create a form instance
  const {
    Form,
    meta: { isSubmitting, canSubmit },
  } = useForm({
    defaultValues,
    onSubmit: async (values, instance) => {
      // onSubmit (and everything else in React Form)
      // has async support out-of-the-box
      // await sendToServer(values);

      console.log(values);
      const input = { values };
      API.graphql(graphqlOperation(createEvent, { input }));

      // The entire up-to-date form api is
      // always available, everywhere
      instance.reset();
    },
  });

  return (
    <Form>
      <label>
        Title: <InputField field="title" />
      </label>
      <label>
        {" "}
        Member:{" "}
        <SelectField
          field="member"
          options={["Red", "Blue", "Green", "Yellow"]}
          validate={value => (!value ? "This is required!" : false)}
        />
      </label>
      <label>
        Start Date: <InputField type="date" field="startDate" />
      </label>
      <label>
        End Date: <InputField type="date" field="endDate" />
      </label>

      {isSubmitting ? "Submitting..." : null}

      <button type="submit" disabled={!canSubmit}>
        Submit
      </button>
    </Form>
  );
}

export default EventForm;
