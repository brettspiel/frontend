import * as React from "react";
import { Form } from "semantic-ui-react";
import { Formik, Field, FormikProps, FieldProps } from "formik";
import {ErrorTip} from "../../components/ErrorTip";
import {GameType} from "../../domain/models/GameRoom";

export interface FormValues {
  gameType: GameType;
}

export interface Props {
  handleSubmit: () => void;
  handleValidate: () => void;
}

export class GameRoomCreationTabPane extends React.Component<Props> {
  render() {
    return (
      <Formik
        initialValues={{}}
        onSubmit={console.log}
        validate={console.log}
        render={this.renderForm}
      />
    )
  }

  private renderForm = (_formikBag: FormikProps<FormValues>) => {
    return (
      <Form>
        <Field
          name="gameType"
          render={this.renderGameTypeField}
        />
      </Form>
    );
  }

  private renderGameTypeField = ({ field, form }: FieldProps<FormValues>) => {
    return (
      <Form.Field error={!!form.errors.gameType}>
        <label>ゲーム</label>
        <ErrorTip error={form.errors.gameType}>
          <Form.Dropdown {...field} options={[
            { text: "a", value: "a" }
          ]} />
        </ErrorTip>
      </Form.Field>
    )
  }
}
