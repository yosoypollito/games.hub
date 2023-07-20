import { FieldProps } from "formik";

export default function FormikInput({ field, form, ...props }: FieldProps) {
  return <input className="flex w-full border-b-2 border-light-blue dark:border-red p-2 py-1 bg-black/5 shadow-sm min-w-[248px]" {...field} {...props} />;
};