import styles from "./FilterBox.module.scss";

const FilterBox = (props) => {
  const filterBoxClasses = props.className ? ` ${props.className}` : "";

  return (
    <aside className={`${styles.box}${filterBoxClasses} mb-4`}>
      <h3>{props.title}</h3>
      {props.children}
    </aside>
  );
};

export default FilterBox;
