import { ChangeEventHandler } from 'react';

interface TextFieldProps {
  value: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  name: string;
}

const TextField = ({
  value,
  onChange,
  label,
  name,
  type = 'text',
  ...props
}: TextFieldProps) => (
  <div className="block">
    <label
      htmlFor="id"
      className="mb-3 block cursor-pointer text-sm font-semibold leading-none text-gray-600"
    >
      {label}
    </label>
    <input
      id="id"
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="text-input font-body placeholder-body min-h-12 focus:border-heading h-11 w-full appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-xs transition focus:outline-none md:h-12 md:px-5 lg:text-sm"
      {...props}
    />
  </div>
);

export default TextField;
