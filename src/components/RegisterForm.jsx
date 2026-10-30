import { Form, Link, useNavigate } from "react-router";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import styles from "./RegisterForm.module.css";

export default function RegistrationForm() {
  const navigate = useNavigate();
  const goHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <Form method="post">
        <div className={styles.formelements}>
          <label htmlFor="email">E-Mail:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Bitte E-Mail eingeben"
          />
          <label htmlFor="username">Benutzername:</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Bitte einen Benutzernamen eingeben"
          />
          <label htmlFor="password">Passwort:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Bitte Passwort eingeben"
          />
          <ButtonGroup>
            <Button type="submit">Speichern</Button>
            <Button onClick={goHome} secondary={true}>
              Abbrechen
            </Button>
          </ButtonGroup>
          <p>
            Du hast schon einen Account? <Link to={"/auth/signin"}>Hier</Link>{" "}
            Anmelden
          </p>
        </div>
      </Form>
    </>
  );
}
