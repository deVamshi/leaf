import { Label, TextInput } from "flowbite-react";

const CustomTextField = ({
  key,
  label,
  disabled,
  name,
  type,
  defaultValue,
  onChange,
  stepValue,
  currValue,
}) => {
  if (!type) type = "text";
  return (
    <div className="my-0">
      <div className="mb-2 block">
        <Label value={label} />
      </div>
      <TextInput
        key={key}
        value={currValue}
        onChange={onChange}
        type={type}
        defaultValue={defaultValue}
        step={stepValue ? stepValue : ""}
        name={name}
        disabled={disabled}
        required={true}
      />
    </div>
  );
};

export default CustomTextField;
