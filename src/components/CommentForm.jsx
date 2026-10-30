import { Form } from "react-router"
import styles from "./CommentForm.module.css"
import Button from "./Button"
import ButtonGroup from "./ButtonGroup"
import Input from "./Input"

export default function CommentForm({ errors = {} }) {
    return (
        <>
            <Form className={styles.authform} method="post" noValidate>
                <label htmlFor="comment">Comment:</label>
                <Input
                    id="comment"
                    name="comment"
                    type="comment"
                    error={errors.name}
                    placeholder="Bitte Kommentar hier schreiben"
                />
                <ButtonGroup className={styles.buttons}>
                    <Button type="submit" children={"Senden"}></Button>
                </ButtonGroup>
            </Form>
        </>
    )
}
