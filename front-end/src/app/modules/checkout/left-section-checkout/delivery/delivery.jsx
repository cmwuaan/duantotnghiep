import { CiCircleQuestion, CiSearch } from 'react-icons/ci';
import { countries, states } from '../../data';
import styles from './delivery.module.css';

export default function Delivery() {
  return (
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
      <input type="text" id="apartment" className={styles.ItemInput} placeholder="Apartment, suite, etc. (optional)" />

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
        <input type='tel' id="phone" className={styles.ItemInput} placeholder="Phone" />
        <CiCircleQuestion className={styles.Icon} />
      </div>
    </div>
  );
}
