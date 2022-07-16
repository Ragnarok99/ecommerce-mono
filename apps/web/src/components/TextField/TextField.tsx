import { FieldProps } from 'formik';
import { TextField as UITextField } from 'ui';

interface TextFieldProps extends FieldProps {
  label: string;
}

const TextField = ({
  field: { name, value, onChange, ...props },
  label,
}: TextFieldProps) => (
  <UITextField
    name={name}
    label={label}
    value={value}
    onChange={onChange}
    {...props}
  />
);

export default TextField;
