import { isValidObjectId } from "mongoose";
import * as yup from "yup";
import { locations } from "./locations";
import { party } from "#/@types/user";
export const CreateUserSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is missing!!")
    .min(3, "Name is too short!!")
    .max(20, "Name is too long!"),
  email: yup.string().required("Email is missing!").email("Invalid email"),
  adhar: yup
    .string()
    .trim()
    .length(12, "Invalid adhar")
    .required("Adhar is missing!"),
  location: yup
    .string()
    .trim()
    .oneOf(locations, "Invalid location!")
    .required("location is missing!"),

  dob: yup
    .date()
    .max(new Date(), "DOB must be in the past")
    .required("DOB is required"),
  voterId: yup
    .string()
    .trim()
    .length(10, "Invalid voterId")
    .required("voterId is missing!"),
  mobile: yup
    .string()
    .trim()
    .length(10, "Invalid mobile no.")
    .required("Mobile no is missing!"),
  address: yup.string().trim().required("address no is missing!"),
});

export const TokenAndAdharOrMobileValidation = yup.object().shape({
  token: yup.string().trim().required("Invalid token!"),
  adhar: yup.lazy((value) => {
    if (!value || value.trim() === "") {
      return yup.string().trim();
    }
    return yup.string().trim().strip().required("Adhar is required");
  }),
  mobile: yup.lazy((value) => {
    if (!value || value.trim() === "") {
      return yup.string().trim();
    }
    return yup.string().trim().strip().required("Mobile is required");
  }),
});
export const AdharOrMobileValidation = yup.object().shape({
  adhar: yup.lazy((value) => {
    if (!value || value.trim() === "") {
      return yup.string().trim();
    }
    return yup.string().trim().strip().required("Adhar is required");
  }),
  mobile: yup.lazy((value) => {
    if (!value || value.trim() === "") {
      return yup.string().trim();
    }
    return yup.string().trim().strip().required("Mobile is required");
  }),
});


// export const updatePasswordSchema = yup.object().shape({
//   token: yup.string().trim().required("Invalid token!"),
//   userId: yup
//     .string()
//     .transform(function (value) {
//       if (this.isType(value) && isValidObjectId(value)) {
//         //here this.isType(value) means value type is string //isValidObjectId means to check valid objectId in mongodb collection
//         return value;
//       }
//       return "";
//     })
//     .required("Invalid userId!"),
//   password: yup
//     .string()
//     .trim()
//     .required("Password is missing!")
//     .min(8, "Password is too short!")
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//       "Password is too simple"
//     ),
// });

export const SignInValidationSchema = yup.object().shape({
  email: yup.string().required("Email is missing!").email("Invalid email id!"),
  password: yup.string().trim().required("Password is missing!"),
});

export const CandidateValidation = yup.object().shape({
  location: yup
    .string()
    .trim()
    .oneOf(locations, "Invalid location!")
    .required("location is missing!"),
  candidateName: yup.string().trim().required("candidateName is missing!"),
  party: yup
    .string()
    .trim()
    .oneOf(party, "Invalid party!")
    .required("party is missing!"),
});
