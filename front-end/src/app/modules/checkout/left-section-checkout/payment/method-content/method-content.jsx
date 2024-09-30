import { useState } from 'react';
import styles from './method-content.module.css';
import { CiCircleQuestion } from 'react-icons/ci';

export const MethodContent = () => {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked(!checked);
  };

  return (
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
        <input id="billing-address" type="checkbox" checked={checked} onChange={onChange} className={styles.Checkbox} />
        <label htmlFor="billing-address" className={styles.Label}>
          Use shipping address as billing address
        </label>
      </div>
    </div>
  );
};