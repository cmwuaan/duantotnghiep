import { products } from '../data';
import ProductItem from './product-item/product-item';
import styles from './right-section-checkout.module.css';
import { GoLock } from "react-icons/go";


export default function RightSectionCheckout() {
  return (
    <section className={styles.SectionContainer}>
      <div className={styles.ProductContainer}>
        {products.map((product) => {
          const { name, imageUrl, price } = product;
          return <ProductItem price={price} name={name} imageUrl={imageUrl} />;
        })}
      </div>

      <div className={styles.DiscountContainer}>
        <input type="text" placeholder="Discount code or gift card" className={styles.DiscountInput} />
        <button type="button" className={styles.DiscountButton}>
          Apply
        </button>
      </div>

      <div className={styles.PriceContainer}>
        <div className={styles.PriceRow}>
          <p className={styles.PriceTitle}>Subtotal (2 items)</p>
          <p className={styles.PriceValue}>$120.00</p>
        </div>
        <div className={styles.PriceRow}>
          <p className={styles.PriceTitle}>Shipping</p>
          <p className={styles.PriceValue}>$0</p>
        </div>
        <div className={styles.PriceRow}>
          <h5 className={styles.PriceTitle}>Total</h5>
          <div className={styles.PriceValueWrapper}>
            <p>USD</p>
            <h5 className={styles.PriceTitle}>$92.98</h5>
          </div>
        </div>
      </div>
      <div className={styles.RememberContainer}>
        <h3 className={styles.SubTitle}>Remember me</h3>

        <div className={styles.SaveInfoWrapper}>
          <input type='checkbox' className={styles.Checkbox}/>
          <label>Save my information for a faster checkout with a Shop account</label>
        </div>

        <div className={styles.NoteWrapper}>
          <GoLock className={styles.Icon}/>
          <p>Secure and encrypted</p>
        </div>

        <button type='button' className={styles.PayButton}>Pay Now</button>
      </div>
    </section>
  );
}
