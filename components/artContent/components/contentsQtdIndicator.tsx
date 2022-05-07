import { FaPlus } from 'react-icons/fa';
import styles from '../artContent.module.scss';

interface ContentsQtdIndicatorProps {
    quantity: number;
}

export default function ContentsQtdIndicator({ quantity }: ContentsQtdIndicatorProps) {
    return (
        <div className={styles.tagIcon}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                <FaPlus size={10} />
                <span style={{ fontSize: 14 }}>{quantity}</span>
            </div>
        </div>
    );
}
