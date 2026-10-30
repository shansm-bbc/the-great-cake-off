import RegistrationForm from "@/components/RegisterForm";
import { saveSession } from "@/lib/session";
import { signup } from "@/lib/signup";
import { redirect } from "react-router";

async function clientAction({ request }) {
  const formData = await request.formData();
  const user = Object.fromEntries(formData);
  const response = await signup(user);
  saveSession(response);
  const param = new URLSearchParams(location.search);
  const path = param.get("path");
  return redirect(path ?? "/");
}

export default function SignUpRoute() {
  return (
    <>
      <h2>Registration</h2>
      <RegistrationForm />
    </>
  );
}

SignUpRoute.action = clientAction;
