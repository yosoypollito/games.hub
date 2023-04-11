import styles from "./Label.module.css";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}
export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
