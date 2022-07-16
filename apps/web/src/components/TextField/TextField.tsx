import { FieldProps } from 'formik';
import { TextField as UITextField } from 'ui';

interface TextFieldProps extends FieldProps {
  label: string;
  type: string;
}

const TextField = ({
  field: { name, value, onChange, ...props },
  label,
  type,
}: TextFieldProps) => (
  <UITextField
    name={name}
    label={label}
    value={value}
    type={type}
    onChange={onChange}
    {...props}
  />
);

export default TextField;
