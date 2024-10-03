'use client';

import { useState } from 'react';
import Image from 'next/image';
import PayPalIcon from '/public/icon/pay-pal.svg';
import GoogleIcon from '/public/icon/google-icon.svg';
import VisaIcon from '/public/icon/visa.png';
import DebitIcon from '/public/icon/debit.png';
import { GoLock } from 'react-icons/go';
import { CiCircleQuestion, CiSearch } from 'react-icons/ci';
import styles from './checkout.module.css';

const paymentMethods = [
  {
    title: 'Credit card',
    icons: [VisaIcon, DebitIcon],
  },
  {
    title: 'Pay Pal',
    icons: [PayPalIcon],
  },
  {
    title: 'Payment upon receipt',
    icons: [],
  },
];

const countries = ['Vietnamese', 'English', 'French', 'German', 'Spanish'];

const states = ['Hanoi', 'Ho Chi Minh', 'Da Nang', 'Hai Phong', 'Can Tho'];

const quickLinks = [
  {
    title: 'Refund policy',
    href: '#',
  },
  {
    title: 'Shipping policy',
    href: '#',
  },
  {
    title: 'Privacy policy',
    href: '#',
  },
  {
    title: 'Terms of service',
    href: '#',
  },
];

const products = [
  {
    name: 'Off The Clock Stretch Cargo Skinny Jeans - Light Wash',
    price: 20.99,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0293/9277/files/11-11-23Studio2_KJ_RL_12-04-01_20_AM19029LT_LightWash_24118_SG.jpg?v=1704925593',
  },
  {
    name: 'Wanna Be Loved Trench Coat - Camel',
    price: 20.99,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0293/9277/files/08-19-24_S3_5_10245JC_Camel_ZSR_DT_JW_16-04-33_43242_CM.jpg?v=1724187217',
  },
];

export default function CheckoutPage() {
  const [checkedTitle, setCheckedTitle] = useState(paymentMethods[0].title);
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked(!checked);
  };

  const onChangeTitle = (event) => {
    setCheckedTitle(event.target.id);
  };
  return (
    <div className={styles.CheckoutContainer}>
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
        <div className={styles.DeliveryContainer}>
          <h3 className={styles.SubTitle}>Delivery</h3>

          {/* Country Field */}
          <div className={styles.CountryField}>
            <label htmlFor="country">Country/regions</label>
            <select name="country" id="country" className={styles.Select}>
              {countries.map((country) => {
                return (
                  <option key={country} value={country}>
                    {country}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Name Field */}
          <div className={styles.RowField}>
            <input type="text" id="firstName" className={styles.ItemInput} placeholder="First name" />
            <input type="text" id="lastName" className={styles.ItemInput} placeholder="Last name" />
          </div>

          {/* Company Field */}
          <input type="text" id="company" className={styles.ItemInput} placeholder="Company (optional)" />

          {/* Address Field */}
          <div className={styles.InputIcon}>
            <input type="text" id="address" className={styles.ItemInput} placeholder="Address" />
            <CiSearch className={styles.Icon} />
          </div>

          {/* Apartment Field */}
          <input
            type="text"
            id="apartment"
            className={styles.ItemInput}
            placeholder="Apartment, suite, etc. (optional)"
          />

          {/* City Field */}
          <div className={styles.RowField}>
            <input type="text" id="city" className={styles.ItemInput} placeholder="City" />

            <select name="state" id="state" className={styles.Select}>
              {states.map((country) => {
                return (
                  <option key={country} value={country}>
                    {country}
                  </option>
                );
              })}
            </select>

            <input type="text" id="zip-code" className={styles.ItemInput} placeholder="ZIP code" />
          </div>

          {/* Phone Field */}
          <div className={styles.InputIcon}>
            <input type="tel" id="phone" className={styles.ItemInput} placeholder="Phone" />
            <CiCircleQuestion className={styles.Icon} />
          </div>
        </div>

        {/* Payment method */}
        <div className={styles.Container}>
          <div className={styles.PaymentHeading}>
            <h3 className={styles.SubTitle}>Payment method</h3>
            <p className={styles.PaymentDescription}>All transactions are secure and encrypted.</p>
            <div className={styles.MethodContainer}>
              {paymentMethods.map((method) => {
                const checked = method.title === checkedTitle;

                return (
                  <div className={styles.MethodWrapper}>
                    <div className={styles.MethodRadio}>
                      <div className={styles.InputContainer}>
                        <input
                          type="radio"
                          id={method.title}
                          name="payment-method"
                          className={styles.Radio}
                          onChange={onChangeTitle}
                          checked={checked}
                        />
                        <label htmlFor={method.title} className={styles.RadioLabel}>
                          {method.title}
                        </label>
                      </div>
                      <div className={styles.IconContainer}>
                        {method.icons !== 0 &&
                          method.icons.map((icon) => {
                            return <img key={icon} src={icon.src} alt={icon} className={styles.RadioIcon} />;
                          })}
                      </div>
                    </div>
                    {checked && (
                      <div className={styles.ContentWrapper}>
                        <div className={styles.MethodContent}>
                          {/* Cart number */}
                          <input type="text" className={styles.ItemInput} placeholder="Cart number" />

                          {/* Expiration date */}
                          <div className={styles.RowInput}>
                            <input type="text" placeholder="Expiration date ( MM/YY )" className={styles.ItemInput} />
                            <div className={styles.InputIcon}>
                              <input type="text" placeholder="Security code" className={styles.ItemInput} />
                              <CiCircleQuestion className={styles.Icon} />
                            </div>
                          </div>

                          {/* Name on cart */}
                          <input type="text" className={styles.ItemInput} placeholder="Name on cart" />

                          {/* Billing address checkbox */}
                          <div className={styles.CheckboxContainer}>
                            <input
                              id="billing-address"
                              type="checkbox"
                              checked={checked}
                              onChange={onChange}
                              className={styles.Checkbox}
                            />
                            <label htmlFor="billing-address" className={styles.Label}>
                              Use shipping address as billing address
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

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

      <div className={styles.DividerSection}></div>

      <section className={styles.SectionContainer}>
        <div className={styles.ProductContainer}>
          {products.map((product) => {
            const { name, imageUrl, price } = product;
            return (
              <div className={styles.ProductItem}>
                <img className={styles.ProductImage} src={product.imageUrl} />
                <div className={styles.ProductContent}>
                  <h3 className={styles.ProductTitle}>{product.name}</h3>
                  <p className={styles.ProductPrice}>${product.price}</p>
                  <div className={styles.Divider}></div>
                </div>
              </div>
            );
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
            <input type="checkbox" className={styles.Checkbox} />
            <label>Save my information for a faster checkout with a Shop account</label>
          </div>

          <div className={styles.NoteWrapper}>
            <GoLock className={styles.Icon} />
            <p>Secure and encrypted</p>
          </div>

          <button type="button" className={styles.PayButton}>
            Pay Now
          </button>
        </div>
      </section>
    </div>
  );
}
