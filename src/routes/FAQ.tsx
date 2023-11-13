import QAndA from "../components/QAndA";
function FAQ() {
  const qAndAs = [
    {
      question: `Why is your name Milk Patrol?`,
      answer: `We like milk.`,
    },
    {
      question: `The whole milk angle is pretty strange isn't it?`,
      answer: `Not really, I can think of three bands with milk based names off the top of my head`,
    },
    {
      question: `What is the Lactose Legion?`,
      answer: `That's what we call our fans`,
    },
  ];
  return (
    <div className="container">
      <div className="shadow-md">
        {qAndAs.map((qAndA) => (
          <QAndA question={qAndA.question} answer={qAndA.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
