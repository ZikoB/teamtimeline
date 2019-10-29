import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

import { useForm } from "react-form";
import { InputField, SelectField } from "./InputField";
import { createEvent } from "../graphql/mutations";
import moment from "moment";

function EventForm({ groups }) {
  // Memoize some default values
  const defaultValues = React.useMemo(
    () => ({
      title: "New Event",
      group: "",
      startDate: moment(),
      endDate: moment().add(1, "hour"),
    }),
    []
  );

  let memberListArray = [];

  groups.forEach(function(item, key) {
    memberListArray.push(item);
  });

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

      // console.log(Date.parse(values.startDate));

      // let newValues = {
      //   title: values.title,
      //   group: values.group,
      //   start_date: Number(startDate.slice(0.8)),
      //   end_date: Number,
      // };
      // console.log(values);
      // const input = { values };
      console.log(values);
      const result = await API.graphql(
        graphqlOperation(createEvent, {
          input: {
            title: values.title,
            start_time: values.startDate,
            end_time: values.endDate,
            eventGroupId: values.group,
          },
        })
      );

      console.log(result.data);

      // The entire up-to-date form api is
      // always available, everywhere
      instance.reset();
    },
  });

  return (
    <Form>
      <h4>Add New Event</h4>
      <label>
        Title: <InputField field="title" />
      </label>
      <label>
        {" "}
        Member:{" "}
        <SelectField
          field="group"
          options={memberListArray}
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
