import { Label, TextInput } from "flowbite-react";

const CustomTextField = ({ label, disabled, name, type, defaultValue }) => {
  if (!type) type = "text";
  return (
    <div className="my-0">
      <div className="mb-2 block">
        <Label value={label} />
      </div>
      <TextInput
        type={type}
        defaultValue={defaultValue}
        step={type === "number" ? "any" : ""}
        name={name}
        disabled={disabled}
        required={true}
      />
    </div>
  );
};

export default CustomTextField;
