import { object, string, ref } from 'yup';

const temporarySchema = object({
    temporaryPassword: string()
    .required('Vous devez saisir le mot de passe temporaire'),

    newPassword: string()
    .required('Vous devez renseigner un nouveau mot de passe')
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Le nouveau mot de passe doit contenir au moins une majuscule, un nombre et un caractère spécial"
      ),

    confirmation: string()
    .oneOf([ref('newPassword'), null], 'Passwords must match')
})

export default temporarySchema