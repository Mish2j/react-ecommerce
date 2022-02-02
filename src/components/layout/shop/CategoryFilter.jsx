import { productActions } from "../../../store/product-slice";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import FilterBox from "../../UI/FilterBox";

import styles from "./CategoryFilter.module.scss";

const CategoryFilter = () => {
  const dispatch = useDispatch();

  const categoryFilterHandler = (e) => {
    const isChecked = e.target.checked;
    const filterCat = e.target.value;
    dispatch(productActions.filterProductsByCat({ filterCat, isChecked }));
  };

  return (
    <FilterBox title="Categories">
      <div className={styles.filter}>
        <Form.Check
          onChange={categoryFilterHandler}
          type="checkbox"
          id="jewelry"
          value="jewelery"
          label="Jewelry"
        />
        <Form.Check
          onChange={categoryFilterHandler}
          type="checkbox"
          id="menClothing"
          label="Men's clothing"
          value="men's clothing"
        />
        <Form.Check
          onChange={categoryFilterHandler}
          type="checkbox"
          id="womenClothing"
          label="Women's clothing"
          value="women's clothing"
        />
        <Form.Check
          onChange={categoryFilterHandler}
          type="checkbox"
          id="electronics"
          label="Electronics"
          value="electronics"
        />
      </div>
    </FilterBox>
  );
};

export default CategoryFilter;
