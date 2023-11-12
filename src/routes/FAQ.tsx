import QAndA from "../components/QAndA";
function FAQ() {
  const qAndAs = [{
    question: `Why is your name Milk Patrol?`,
    answer: `We like milk.`
  },
  {
    question: `What is the Lactose Legion?`,
    answer: `That's what we call our fans`
  }]
  return (
    <div>
      <div className="shadow-md">
        {qAndAs.map((qAndA) => <QAndA question={qAndA.question} answer={qAndA.answer} />)}
      </div>
    </div>
  );
}

export default FAQ;
