import { useNavigate, Form } from "react-router"
import styles from "./AuthForm.module.css"
import Button from "./Button"
import ButtonGroup from "./ButtonGroup"
import Input from "./Input"

export default function AuthForm({ errors = {} }) {
    const navigate = useNavigate()
    const goBack = () => {
        return navigate("/")
    }

    return (
        <>
            <Form className={styles.authform} method="post" noValidate>
                <label htmlFor="email">E-Mail:</label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    error={errors.email}
                    placeholder="Bitte E-Mail Adresse eingeben"
                />
                <label htmlFor="password">Passwort:</label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    error={errors.password}
                    placeholder="Bitte Passwort eingeben"
                />
                <ButtonGroup className={styles.buttons}>
                    <Button type="submit" children={"Speichern"}></Button>
                    <Button
                        type="button"
                        children={"Abbrechen"}
                        secondary={true}
                        onClick={goBack}
                    ></Button>
                </ButtonGroup>
            </Form>
        </>
    )
}
