import styles from './Infographic.module.css';

export default function Infographic({ title, stats, icon: Icon }) {
  return (
    <div className={`${styles.infographic} glass-card`}>
      {title && (
        <h3 className={styles.title}>
          {Icon && <Icon size={20} className={styles.titleIcon} />}
          {title}
        </h3>
      )}
      <div className={styles.statsGrid}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.statItem}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
            {stat.detail && <div className={styles.statDetail}>{stat.detail}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
