import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

import { createMember } from "../graphql/mutations";
import { useForm } from "react-form";
import { InputField } from "./InputField";

function MemberForm() {
  // Memoize some default values
  const defaultValues = React.useMemo(
    () => ({
      title: "Enter Name",
    }),
    []
  );

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
      console.log(`${values.title}`);
      const input = { title: values.title };
      // const result = await API.graphql(
      //   graphqlOperation(createMember, { input })
      // );

      // const newMember = result.data.createMember;
      // console.log(newMember.title);

      // setMember(prevState => {
      //   // Object.assign would also work
      //   return prevState.push(newMember.name);
      // });

      // console.log(member);

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

      {isSubmitting ? "Submitting..." : null}

      <button type="submit" disabled={!canSubmit}>
        Submit
      </button>
    </Form>
  );
}

export default MemberForm;
