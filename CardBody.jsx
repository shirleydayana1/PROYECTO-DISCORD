import Title from '../atoms/Title';
import FormInput from '../molecules/FormInput';
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import TermsAndConditions from '../molecules/TermsAndConditions';

const CardBody = () => (
  <div>
    <Title>Create account</Title>
    <form>
      <FormInput
        labelFor="email"
        labelText="EMAIL"
        inputType="email"
        inputName="email"
      />
      <FormInput
        labelFor="username"
        labelText="USERNAME"
        inputType="text"
        inputName="username"
      />
      <FormInput
        labelFor="password"
        labelText="PASSWORD"
        inputType="password"
        inputName="password"
      />
      <Button>Continue</Button>
      <Link href="#">Already have an account?</Link>
      <TermsAndConditions />
    </form>
  </div>
);

export default CardBody;