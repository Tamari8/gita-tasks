import styles from './AccordionItem.module.css';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={styles.item}>
      <button 
        className={`${styles.questionBtn} ${isOpen ? styles.active : ''}`} 
        onClick={onClick}
      >
        <span>{question}</span>
        <span>{isOpen ? '↑' : '↓'}</span>
      </button>
      {isOpen && <div className={styles.answer}>{answer}</div>}
    </div>
  );
};

export default AccordionItem;