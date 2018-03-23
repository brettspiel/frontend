import * as React from "react";
import { withFormik } from "formik";
import { Form } from "semantic-ui-react";

export interface Props {
  handleSubmit: (message: string) => Promise<void>;
}

export interface FormValue {
  message: string;
}

export const ChatSendForm = withFormik<Props, FormValue>({
  mapPropsToValues: () => ({ message: "" }),
  handleSubmit: async (values, { props, resetForm }) => {
    await props.handleSubmit(values.message);
    resetForm();
  }
})(({ values, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Input
      name="message"
      fluid
      action="送信"
      placeholder="Hi, ..."
      value={values.message}
      onChange={handleChange}
    />
  </Form>
));
