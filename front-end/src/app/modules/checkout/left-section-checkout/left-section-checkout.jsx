import styles from './left-section-checkout.module.css';
import Image from 'next/image';
import PayPalIcon from '/public/icon/pay-pal.svg';
import GoogleIcon from '/public/icon/google-icon.svg';

import { quickLinks } from '../data';
import Delivery from './delivery/delivery';
import Payment from './payment/payment';

export default function LeftSectionCheckout() {
  return (
    <section className={styles.SectionContainer}>
      <h2 className={styles.Heading}>Express checkout</h2>

      {/* Button */}
      <div className={styles.ButtonContainer}>
        <div className={styles.ButtonsWrapper}>
          <button className={styles.Button}>
            <span>Shop</span>
            <span>Pay</span>
          </button>
          <button className={styles.Button}>
            <Image src={PayPalIcon} />
          </button>
          <button className={styles.Button}>
            <Image src={GoogleIcon} />
            <span>Pay</span>
          </button>
        </div>
        <div className={styles.MoreContent}>
          <div className={styles.Divider}></div>
          <span>OR</span>
          <div className={styles.Divider}></div>
        </div>
      </div>

      {/* Account */}
      <div className={styles.AccountContainer}>
        <label htmlFor="account">Account</label>
        <input type="email" id="account" className={styles.Input} />
      </div>

      {/* Delivery */}
      <Delivery />

      {/* Payment method */}
      <Payment />

      {/* Quick lick */}
      <div className={styles.RowField}>
        {quickLinks.map((link) => {
          return (
            <a key={link.title} href={link.href} className={styles.QuickLink}>
              {link.title}
            </a>
          );
        })}
      </div>
    </section>
  );
}
