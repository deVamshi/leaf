import { Label, TextInput } from "flowbite-react";

const CustomTextField = ({ label, disabled, name, type }) => {
  if (!type) type = "text";
  return (
    <div className="my-0">
      <div className="mb-2 block">
        <Label value={label} />
      </div>
      <TextInput
        type={type}
        step={type === "number" ? "any" : ""}
        name={name}
        disabled={disabled}
        placeholder=""
        required={true}
      />
    </div>
  );
};

export default CustomTextField;
