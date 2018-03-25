import * as React from "react";
import { CentralContainer } from "../../components/CentralContainer";
import { Form, Divider } from "semantic-ui-react";
import * as styles from "./styles.css";
import { ErrorTip } from "../../components/ErrorTip";
import { Formik, Field, FormikProps, FieldProps } from "formik";
import { LoginPagePresenter } from "./LoginPagePresenter";

export interface Props {
  presenter: LoginPagePresenter;
}

export interface FormValues {
  userName: string;
  serverHost: string;
  serverPort: number;
}

export class LoginPageComponent extends React.Component<Props> {
  render() {
    return (
      <CentralContainer>
        <Formik
          initialValues={{
            userName: "",
            serverHost: "localhost",
            serverPort: 2008
          }}
          onSubmit={this.props.presenter.handleSubmit}
          validate={this.props.presenter.handleValidate}
          render={this.renderForm}
        />
      </CentralContainer>
    );
  }

  private renderForm(formikBag: FormikProps<FormValues>) {
    return (
      <Form className={styles.form} onSubmit={formikBag.handleSubmit}>
        <Field
          name="userName"
          render={({ field, form }: FieldProps<FormValues>) => (
            <Form.Field error={!!form.errors.userName}>
              <label>ユーザー名</label>
              <ErrorTip error={form.errors.userName}>
                <Form.Input type="text" {...field} />
              </ErrorTip>
            </Form.Field>
          )}
        />

        <Divider />

        <Field
          name="serverHost"
          render={({ field, form }: FieldProps<FormValues>) => (
            <Form.Field error={!!form.errors.serverHost}>
              <label>サーバーホスト名</label>
              <ErrorTip error={form.errors.serverHost}>
                <Form.Input type="text" {...field} />
              </ErrorTip>
            </Form.Field>
          )}
        />

        <Field
          name="serverPort"
          render={({ field, form }: FieldProps<FormValues>) => (
            <Form.Field error={!!form.errors.serverPort}>
              <label>サーバーポート番号</label>
              <ErrorTip error={form.errors.serverPort}>
                <Form.Input type="number" {...field} />
              </ErrorTip>
            </Form.Field>
          )}
        />

        <Form.Button
          type="submit"
          disabled={formikBag.isSubmitting || !formikBag.isValid}
        >
          接続
        </Form.Button>
      </Form>
    );
  }
}
