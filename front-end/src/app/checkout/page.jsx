import LeftSectionCheckout from '../modules/checkout/left-section-checkout/left-section-checkout';
import RightSectionCheckout from '../modules/checkout/right-section-checkout/right-section-checkout';
import styles from './checkout.module.css';

export default function CheckoutPage() {
  return (
    <div className={styles.CheckoutContainer}>
      <LeftSectionCheckout />
      <div className={styles.Divider}></div>
      <RightSectionCheckout />
    </div>
  );
}
