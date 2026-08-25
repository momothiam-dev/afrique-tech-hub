import styles from './StepGuide.module.css';

export default function StepGuide({ steps }) {
  return (
    <div className={styles.stepGuide}>
      {steps.map((step, index) => (
        <div key={index} className={styles.step}>
          <div className={styles.stepNumber}>
            <span>{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div className={styles.stepContent}>
            <h4 className={styles.stepTitle}>{step.title}</h4>
            <p className={styles.stepDesc}>{step.description}</p>
            {step.detail && (
              <div className={styles.stepDetail}>{step.detail}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
