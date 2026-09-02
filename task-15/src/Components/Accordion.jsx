import { useState } from 'react';
import AccordionItem from './AccordionItem';
import { faqData } from '../data';
import styles from './Accordion.module.css';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1); // მე-2 კითხვა ღიაა დეფოლტად

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageSection}>
        {/* სურათს მოგვიანებით ჩავსვამთ */}
        <p>Image goes here</p>
      </div>

      <div className={styles.faqSection}>
        <h1 className={styles.title}>FAQ</h1>
        <div>
          {faqData.map((item, index) => (
            <AccordionItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;