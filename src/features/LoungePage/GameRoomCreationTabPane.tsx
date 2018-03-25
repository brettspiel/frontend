import * as React from "react";
import { Form, Divider } from "semantic-ui-react";
import { Formik, Field, FormikProps, FieldProps } from "formik";
import {GameType} from "../../domain/models/GameRoom";
import {ErrorTip} from "../../components/ErrorTip";

export interface FormValues {
  gameType: GameType;
}

export class GameRoomCreationTabPane extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{}}
        onSubmit={console.log}
        validate={console.log}
        render={this.renderForm.bind(this)}
      />
    )
  }

  private renderForm(formikBag: FormikProps<FormValues>) {
    return (
      <Form>
        <Field
          name="gameType"
          render={this.renderGameTypeField}
        />
      </Form>
    );
  }

  private renderGameTypeField({ field, form }: FieldProps<FormValues>) {
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
