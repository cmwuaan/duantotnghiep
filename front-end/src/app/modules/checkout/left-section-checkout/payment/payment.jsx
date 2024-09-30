'use client';

import { useState } from 'react';
import styles from './payment.module.css';
import VisaIcon from '/public/icon/visa.png';
import DebitIcon from '/public/icon/debit.png';
import PayPal from '/public/icon/pay-pal.svg';
import { MethodContent } from './method-content/method-content';



const paymentMethods = [
  {
    title: 'Credit card',
    icons: [VisaIcon, DebitIcon],
    content: <MethodContent />,
  },
  {
    title: 'Pay Pal',
    icons: [PayPal],
    content: <MethodContent />,
  },
  {
    title: 'Payment upon receipt',
    icons: [],
    content: <MethodContent />,
  },
];

const RadioGroup = ({ title, icons = [], content, checked = false, onChange }) => {
  return (
    <div className={styles.MethodWrapper}>
      <div className={styles.MethodRadio}>
        <div className={styles.InputContainer}>
          <input
            type="radio"
            id={title}
            name="payment-method"
            className={styles.Radio}
            onChange={onChange}
            checked={checked}
          />
          <label htmlFor={title} className={styles.RadioLabel}>
            {title}
          </label>
        </div>
        <div className={styles.IconContainer}>
          {icons !== 0 &&
            icons.map((icon) => {
              return <img key={icon} src={icon.src} alt={icon} className={styles.RadioIcon} />;
            })}
        </div>
      </div>
      {checked && <div className={styles.ContentWrapper}>{content}</div>}
    </div>
  );
};

export default function Payment() {
  const [checkedTitle, setCheckedTitle] = useState(paymentMethods[0].title);

  const onChange = (event) => {
    setCheckedTitle(event.target.id);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.PaymentHeading}>
        <h3 className={styles.SubTitle}>Payment method</h3>
        <p className={styles.PaymentDescription}>All transactions are secure and encrypted.</p>
        <div className={styles.MethodContainer}>
          {paymentMethods.map((method) => {
            const checked = method.title === checkedTitle;

            return (
              <RadioGroup
                key={method.title}
                title={method.title}
                icons={method.icons}
                content={method.content}
                checked={checked}
                onChange={onChange}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
