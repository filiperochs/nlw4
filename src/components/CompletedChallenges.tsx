import styles from '../styles/components/CompleteChallenges.module.css';

export function CompleteChallenges() {
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    );
}