import AccordionItem from './AccordionItem';

const questionsAnswers = [
  {
    question: "À qui s'adresse cet événement ?",
    response: "Cet événement s'adresse à toutes personnes passionnées d'informatique ou de technologie, ou simplement de personnes curieuses et intéressées par ces domaines.",
  },
  {
    question: "Quand est-ce que cet évènement aura lieu ?",
    response: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia atque nemo excepturi totam quaerat quame",
  },
  {
    question: "Qui peut participer aux compétitions ?",
    response: "Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files",
  },
  {
    question: "Pour plus d'informations, qui puis-je contacter ?",
    response: "Over 500+ professionally designed, fully responsive, expertly crafted component examples",
  },
  {
    question: "Comment devenir sponsor ?",
    response: "Add the following code to the vite.config.ts so your app can resolve paths without error",
  },
];

const Accordion = () => {
  return (
    <div className="max-w-md mx-auto mt-8">
      {questionsAnswers.map((item, index) => (
        <AccordionItem key={index} title={item.question}>
          {item.response}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
