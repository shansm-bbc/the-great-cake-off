export function validateSignIn(chronicle) {
  const errors = {
    email: "",
    password: "",
  };

  let isValid = true;

  if (chronicle.email.trim().length === 0 || !chronicle.email.includes("@")) {
    errors.email =
      "E-Mail darf nicht leer sein und muss eine gültige E-Mail Adresse sein";
    isValid = false;
  }
  if (chronicle.password.trim().length < 8) {
    errors.password =
      "Passwort darf nicht leer sein und muss mindestens 8 zeichen lang sein";
    isValid = false;
  }

  return { errors, isValid };
}
