import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const accordionData = [
  {
    value: "item-1",
    trigger: "À qui s'adresse cet événement ?",
    content: "Cet événement s'adresse à toutes personnes passionnées d'informatique ou de technologie, ou simplement de personnes curieuses et intéressées par ces domaines.",
  },
  {
    value: "item-2",
    trigger: "Quand est-ce que cet évènement aura lieu ?",
    content: "Ensemble des faits plus ou moins importants de l'actualité. Les événements dont nous sommes témoins; être au courant des événements.",
  },
  {
    value: "item-3",
    trigger: "Qui peut participer aux compétitions ?",
    content: "Événement synonyme de manifestation. Ceux qui considèrent le mot événement comme un anglicisme dans le sens de manifestation affirment que l'événement.",
  },
  {
    value: "item-4",
    trigger: "Comment puis-je m'inscrire à l'événement ?",
    content: "Vous pouvez vous inscrire à l'événement en ligne via notre site web ou en personne le jour de l'événement.",
  },
  {
    value: "item-5",
    trigger: "Y a-t-il des frais de participation ?",
    content: "Non, la participation à l'événement est gratuite pour tous les participants.",
  },
];

function Questions() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-10/12 my-4 mx-auto text-center">
      <h2 className='font-kontes capitalize text-yellow mb-8  text-[38px] md:text-[48px] '>
        <span className='text-white'>Foires aux </span> questions
      </h2>
      <div className="flex gap-2 flex-row items-start lg:items-start lg:justify-between">
        <div className="hidden md:block lg:w-1/2 lg:mb-0">
          <img 
            src="/src/assets/images/ImageQuestion.png" 
            alt="FAQ" 
            className="w-3/4 h-auto mx-auto border-1 border-white rounded-bl-3xl rounded-br-3xl rounded-tl-3xl rounded-tr-[100px]"
          />
        </div>
        <div className="md:w-1/2 md:ml-4 m-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full text-left text-whiteSmoke"
            value={selected}
            onValueChange={setSelected}
          >
            {accordionData.map((item) => (
              <AccordionItem 
                key={item.value} 
                value={item.value}
              >
                <AccordionTrigger className={`${selected === item.value ? "text-bruning" : ""}`}>{item.trigger}</AccordionTrigger>
                <AccordionContent className="pr-4">{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Questions
