import { Label, TextInput } from "flowbite-react";

const CustomTextField = ({ label, disabled }) => {
  return (
    <div className="my-0">
      <div className="mb-2 block">
        <Label value={label} />
      </div>
      <TextInput disabled={disabled} placeholder="" required={true} />
    </div>
  );
};

export default CustomTextField;
