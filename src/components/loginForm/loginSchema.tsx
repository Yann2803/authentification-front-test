import { object, string } from 'yup';

const loginSchema = object({
  email: string().email().required("adresse email non valide"),
  password: string()
      .required('Vous devez renseigner un mot de passe')
      .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Le mot de passe doit contenir au moins une majuscule, un nombre et un caractère spécial"
      ),
})

export default loginSchema