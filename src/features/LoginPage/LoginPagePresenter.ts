import { FormValues } from "./LoginPageComponent";
import { FormikBag } from "formik";
import { StatusRepository } from "../../domain/repositories/StatusRepository";
import { Dispatch } from "redux";
import { history } from "../../history";
import {cirquit} from "../../libs/redux-cirquit";
import uuid = require("uuid");
import {State} from "../../state";

export type ValidationErrors = { [K in keyof Partial<FormValues>]: string };

export class LoginPagePresenter {
  constructor(private dispatch: Dispatch<any>) {}

  handleValidate = (values: FormValues): ValidationErrors => {
    const errors: ValidationErrors = {};
    if (!values.userName) {
      errors.userName = "必須です";
    }
    if (!values.serverHost) {
      errors.serverHost = "必須です";
    }
    if (!values.serverPort) {
      errors.serverPort = "必須です";
    }
    return errors;
  };

  handleSubmit = async (
    values: FormValues,
    formikBag: FormikBag<{}, FormValues>
  ): Promise<void> => {
    try {
      const protocol = location.protocol === "https:" ? "https:" : "http:";
      const host = values.serverHost;
      const port = values.serverPort;
      await new StatusRepository(protocol, host, port).get();
      this.dispatch(cirquit<State>(state => ({
        ...state,
        user: {
          id: uuid.v4(),
          name: values.userName
        },
        server: {
          protocol,
          host,
          port
        }
      })));
      history.push("/counter");
    } catch {
      formikBag.setSubmitting(false);
    }
  };
}
