import { useState, useEffect } from "react";
import { productActions } from "../../../store/product-slice";
import { useDispatch } from "react-redux";
import { dollarsToCents, centToDollars } from "../../../helper";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import FilterBox from "../../UI/FilterBox";

const DEBOUNCE_TIME = 150;

const PriceFilter = () => {
  const dispatch = useDispatch();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const priceMinFilterHandler = (e) => {
    const numVal = +e.target.value;
    const convertNumVal = dollarsToCents(numVal);
    setMinPrice(convertNumVal);
  };

  const priceMaxFilterHandler = (e) => {
    const numVal = +e.target.value;
    const convertNumVal = dollarsToCents(numVal);

    convertNumVal ? setMaxPrice(convertNumVal) : setMaxPrice(Infinity);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      dispatch(productActions.filterProductsByPrice({ minPrice, maxPrice }));
    }, DEBOUNCE_TIME);

    return () => {
      clearTimeout(debounce);
    };
  }, [minPrice, maxPrice]);

  return (
    <FilterBox className="mb-lg-0" title="Price Filter">
      <InputGroup>
        <FormControl
          type="number"
          placeholder="Min"
          onChange={priceMinFilterHandler}
          onWheel={(e) => e.target.blur()}
        />
        <FormControl
          type="number"
          placeholder="Max"
          onChange={priceMaxFilterHandler}
          onWheel={(e) => e.target.blur()}
        />
      </InputGroup>
    </FilterBox>
  );
};

export default PriceFilter;
