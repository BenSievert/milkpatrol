import { useContext } from "react";
import {ThemeContext} from "../context/theme.tsx";

function FAQ() {
  const qAndAs = [
    {
      question: `Why is your name Milk Patrol?`,
      answer: `We like milk.`,
    },
    {
      question: `The whole milk angle is pretty strange isn't it?`,
      answer: `Not really, I can think of three bands with milk based names off the top of my head.`,
    },
    {
      question: `What is the Lactose Legion?`,
      answer: `That's what we call our fans.`,
    }
  ];
  document.title = `Milk Patrol-FAQ`
  const theme =  useContext(ThemeContext).card;

  return (
    <div>
      <div className="p-2">
        {qAndAs.map(({question, answer}, i) => (
          <div className={`mb-6 border-b ${theme.border}`} key={i}>
            <div className=' mb-1'>{question}</div>
            <div className='mb-1'>{answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
