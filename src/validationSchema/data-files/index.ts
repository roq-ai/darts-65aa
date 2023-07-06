import * as yup from 'yup';

export const dataFileValidationSchema = yup.object().shape({
  name: yup.string().required(),
  content: yup.string().required(),
  user_id: yup.string().nullable(),
});
