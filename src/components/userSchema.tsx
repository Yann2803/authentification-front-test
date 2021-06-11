import { array, boolean, mixed, number, object, string } from 'yup';


const userSchema = object({
  email: string().email().required("Email is a required field"),
  password: string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
})

export default userSchema