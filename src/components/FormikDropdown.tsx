import * as React from "react";
import { Dropdown, DropdownProps } from "semantic-ui-react";
import {FieldProps} from "formik";

export type Props<FormValue> = DropdownProps & FieldProps<FormValue>;

export class FormikDropdown<FormValue> extends React.Component<Props<FormValue>> {
  render() {
    const { field, form, ...otherProps } = this.props;
    return (
      <Dropdown
        {...otherProps}
        onChange={(_e, { value }) => form.setFieldValue(field.name, value)}
        onBlur={() => form.setFieldTouched(field.name)}
      />
    );
  }
}
