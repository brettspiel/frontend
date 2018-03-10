import {FormValues} from "./LoginPageComponent";
import {FormikBag} from "formik";

export type ValidationErrors = {
  [K in keyof Partial<FormValues>]: string;
}

export class LoginPagePresenter {
  handleValidate(values: FormValues): ValidationErrors {
    const errors: ValidationErrors = {};
    if (!values.userName) {
      errors.userName = '必須です';
    }
    if (!values.serverHost) {
      errors.serverHost = '必須です';
    }
    if (!values.serverPort) {
      errors.serverPort = '必須です';
    }
    return errors;
  }

  handleSubmit(values: FormValues, formikBag: FormikBag<{}, FormValues>): void {
    console.log("@values", values);
    console.log("@formikBag", formikBag);
    setTimeout(() => {
      formikBag.setSubmitting(false);
    }, 1000);
  }
}
