'use client'

import faqData from '@/data/faq.json';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/accordion';

export default function FaqSection () {
  return (
    <div className="space-y-24">
      <form className="grid gap-4 max-w-xs mx-auto border-b border-zinc-300">
        <div className="flex items-center gap-2 rounded p-1 cursor-pointer">
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            className="h-8 outline-none w-full cursor-pointer"
            placeholder="Search"
          />
        </div>
      </form>
      <Accordion allowToggle className="grid gap-4 max-w-xl mx-auto">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} className="py-4 border-t border-zinc-300">
            {({ isExpanded }) => (
              <>
                <AccordionButton className="text-lg font-semibold flex justify-between gap-2">
                  <h3 className="text-left">{faq.question}</h3>
                  <span
                    className={`material-symbols-outlined text-zinc-500 transition ${
                      isExpanded && 'rotate-90'
                    }`}
                  >
                    {isExpanded
                      ? 'add_circle_outline'
                      : 'remove_circle_outline'}
                  </span>
                </AccordionButton>
                <AccordionPanel>
                  <p className="pt-4 text-zinc-700">{faq.answer}</p>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}