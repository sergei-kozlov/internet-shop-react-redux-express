import * as Yup from 'yup';

const BasketFormSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(3, "Must be longer than 3 characters")
        .max(20, "Nice try, nobody has a first name that long")
        .required("Requred"),
    secondname: Yup.string()
        .min(3, "Must be longer than 3 characters")
        .max(20, "Nice try, nobody has a second name that long")
        .required("Requred"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Requered"),
    phone: Yup.number
        .required('Phone number is required!')
        .integer() 
        .positive()
});

export default BasketFormSchema;


