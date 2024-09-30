import styles from './product-item.module.css';

export default function ProductItem({ name, imageUrl, price }) {
  return (
    <div className={styles.ProductItem}>
      <img className={styles.ProductImage} src={imageUrl} />
      <div className={styles.ProductContent}>
        <h3 className={styles.ProductTitle}>{name}</h3>
        <p className={styles.ProductPrice}>${price}</p>
        <div className={styles.Divider}></div>
      </div>
    </div>
  );
}
