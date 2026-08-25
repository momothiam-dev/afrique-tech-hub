import styles from './ComparisonTable.module.css';

export default function ComparisonTable({ headers, rows, caption }) {
  return (
    <div className={styles.tableWrapper}>
      {caption && <p className={styles.caption}>{caption}</p>}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={i} className={styles.th}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                {row.map((cell, j) => (
                  <td key={j} className={`${styles.td} ${j === 0 ? styles.tdFirst : ''}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
