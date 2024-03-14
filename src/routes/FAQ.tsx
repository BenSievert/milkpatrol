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
    },
    {
      question: `Why is the nav button on the left side on mobile?`,
      answer: `I am left-handed and want to take revenge against a world made for right-handed people.`
    },
    {
      question: `Why are all these questions answered in first-person? I thought you were a band.`,
      answer: `Yes, but I'm the one answering these.`
    }
  ];
  document.title = `Milk Patrol-FAQ`
  return (
    <div>
      <div className="p-2">
        {qAndAs.map(({question, answer}, i) => (
          <div className='mb-6 border-b border-violet-700' key={i}>
            <div className='text-base mb-1'>{question}</div>
            <div className='mb-1'>{answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
