import { Form, useNavigate } from "react-router"

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
                name="name"
                placeholder="Bitte Kuchennamen eingeben"
                error={errors.name}
                defaultValue={cake.name}
            />
            <Input
                label="Flavor: *"
                name="flavor"
                placeholder="Bitte Kuchengeschmack eingeben"
                error={errors.flavor}
                defaultValue={cake.flavor}
            />
            <Input
                label="Preis: *"
                name="price"
                placeholder="Bitte Kuchenpreis eingeben"
                error={errors.price}
                defaultValue={cake.price}
            />
            <Textarea
                label="Description: *"
                name="description"
                placeholder="Bitte Kuchen Beschreibung eingeben"
                error={errors.description}
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
