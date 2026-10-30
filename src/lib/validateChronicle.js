export function validateChronicle(chronicle) {
  const errors = {
    title: "",
    text: "",
  };

  let isValid = true;

  if (chronicle.title.trim().length === 0) {
    errors.title = "Titel darf nicht leer sein";
    isValid = false;
  }

  if (chronicle.text.trim().length === 0) {
    errors.text = "Text darf nicht leer sein";
    isValid = false;
  }

  return { errors, isValid };
}
