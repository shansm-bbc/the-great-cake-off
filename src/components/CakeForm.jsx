import { Form } from "react-router"

import Input from "./Input"
import Textarea from "./TextArea"
import Button from "./Button"
import ButtonGroup from "./ButtonGroup"

export default function CakeForm({ cake = {}, errors = {} }) {
    const navigate = useNavigate()
    const goBack = () => {
        navigate("/")
    }
    return (
        <Form method="post" noValidate>
            <Input
                label="Titel: *"
                type="text"
                name="title"
                placeholder="Bitte Kuchennamen eingeben"
                error={errors.title}
                defaultValue={cake.title}
            />
            <Textarea
                label="Text: *"
                name="text"
                placeholder="Bitte Kuchengeschmack eingeben"
                error={errors.text}
                defaultValue={cake.flavor}
            />
            <Textarea
                label="Text: *"
                name="text"
                placeholder="Bitte Kuchenpreis eingeben"
                error={errors.text}
                defaultValue={cake.price}
            />
            <Textarea
                label="Text: *"
                name="text"
                placeholder="Bitte Kuchen Beschreibung eingeben"
                error={errors.text}
                defaultValue={cake.description}
            />
            <ButtonGroup>
                <Button type="submit">Speichern</Button>
                <Button type="button" secondary={true} onClick={goBack}>
                    Abbrechen
                </Button>
            </ButtonGroup>
        </Form>
    )
}
