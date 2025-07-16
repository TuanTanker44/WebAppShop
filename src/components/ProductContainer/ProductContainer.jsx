import Product from "./Product/Product";
import styles from "./ProductContainer.module.css";
import image1 from "../../assets/images/product1.png";

const ProductContainer = ({className}) => {
  return (
    <div className={className}>
      <div className={styles['product-container']}>
        <Product image={image1} title={'Iphone 16 Pro Max 256GB'} price={'30.290.000'}/>
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default ProductContainer;
