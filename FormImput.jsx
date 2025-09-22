import Label from '../atoms/Label';
import Input from '../atoms/Input';

const FormInput = ({ labelFor, labelText, inputType, inputName }) => (
  <div>
    <Label htmlFor={labelFor}>{labelText}</Label>
    <Input type={inputType} name={inputName} />
  </div>
);

export default FormInput;