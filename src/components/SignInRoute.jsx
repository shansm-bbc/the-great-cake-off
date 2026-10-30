import AuthForm from "@/components/AuthForm";
import { signin } from "@/lib/signin";
import { saveSession } from "@/lib/session";
import { redirect, useActionData } from "react-router";
import { validateSignIn } from "@/lib/validateSignIn";

async function clientAction({ request }) {
  const formData = await request.formData();
  const user = Object.fromEntries(formData);

  const { errors, isValid } = validateSignIn(user);
  if (!isValid) {
    return errors;
  }

  const response = await signin(user);
  saveSession(response);
  const param = new URLSearchParams(location.search);
  const path = param.get("path");
  return redirect(path ?? "/");
}

export default function SignInRoute() {
  const errors = useActionData();
  return (
    <>
      <h2>Anmelden</h2>
      <AuthForm errors={errors} />
    </>
  );
}

SignInRoute.action = clientAction;
