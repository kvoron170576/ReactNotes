import css from './Alert.module.css';
export const Alert = ({ variant, outlined, elevated, children }) => {
  const classNames = [css.alert, css[variant]];
  if (outlined) classNames.push(css['is-outlined']);
  if (elevated) classNames.push(css['is-elevated']);
  return <p className={classNames.join(' ')}>{children}</p>;
};
