"use client"
import { useState } from "react";
import HeroOverlay from "../components/HeroOverlay";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Button from "../components/Button";
import BaseFooter from "../components/BaseFooter";
import GeneralFooter from "../components/GeneralFooter";

const faqs = [
  {
    question: "What is HBOT?",
    answer:
      "Hyperbaric Oxygen Therapy (HBOT) is a medical treatment that involves breathing pure oxygen in a pressurized chamber. It promotes healing and reduces inflammation by allowing your lungs to gather more oxygen than would be possible breathing at normal air pressure.",
  },
  {
    question: "How does HBOT work?",
    answer:
      "In a hyperbaric chamber, air pressure is increased to three times higher than normal atmospheric pressure. This helps your blood carry more oxygen to organs and tissues, enhancing the body’s natural healing process.",
  },
  {
    question: "What conditions can HBOT treat?",
    answer:
      "HBOT is used to treat various conditions, including chronic wounds, carbon monoxide poisoning, decompression sickness, radiation injury, infections, and more. It is also popular for its anti-aging and wellness benefits.",
  },
  {
    question: "Is HBOT safe?",
    answer:
      "Yes, HBOT is generally considered safe when administered by trained professionals. However, it may not be suitable for everyone. It’s important to consult with your doctor to determine if HBOT is right for you.",
  },
  {
    question: "How long does a typical HBOT session last?",
    answer:
      "A typical HBOT session lasts about 60 to 90 minutes. The duration and number of sessions needed can vary based on the condition being treated and the individual’s response to therapy.",
  },
  {
    question: "What should I expect during an HBOT session?",
    answer:
      "During the session, you will lie down in the chamber and breathe normally. You may experience a sensation of fullness in your ears as the pressure changes, similar to what you feel during an airplane takeoff or landing.",
  },
  {
    question: "Are there any side effects of HBOT?",
    answer:
      "Some people may experience mild side effects, such as ear pressure, sinus discomfort, or temporary changes in vision. Serious side effects are rare but can include oxygen toxicity and lung damage.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions varies depending on the condition being treated and individual response. Some conditions may require 20-40 sessions, while others may need fewer.",
  },
  {
    question: "Can HBOT be used for general wellness and anti-aging?",
    answer:
      "Yes, many people use HBOT for its wellness and anti-aging benefits. It enhances oxygen delivery to tissues, potentially reducing inflammation and promoting cell repair.",
  },
  {
    question: "Who should avoid HBOT?",
    answer:
      "HBOT may not be suitable for people with certain conditions such as untreated pneumothorax, certain lung diseases, or those undergoing chemotherapy. Always consult your doctor before starting treatment.",
  },
  {
    question: "How do I prepare for an HBOT session?",
    answer:
      "You should avoid alcohol and caffeine before the session. Wear comfortable clothing, and remove any makeup, lotions, or perfumes. Your healthcare provider will give you specific instructions based on your condition.",
  },
  {
    question: "Can I drive myself to and from my HBOT sessions?",
    answer:
      "Yes, most patients can drive themselves to and from their HBOT sessions. However, if you experience any dizziness or discomfort, it’s best to have someone accompany you.",
  },
  {
    question: "Is HBOT covered by insurance?",
    answer:
      "HBOT is often covered by insurance for FDA-approved indications such as non-healing wounds, radiation injury, and carbon monoxide poisoning. Coverage for other conditions may vary, so it's important to check with your insurance provider.",
  },
  {
    question: "Can children undergo HBOT?",
    answer:
      "Yes, children can safely undergo HBOT for conditions such as autism, cerebral palsy, and traumatic brain injury, under the supervision of a qualified healthcare provider.",
  },
  {
    question: "What should I wear during an HBOT session?",
    answer:
      "You should wear comfortable, loose-fitting clothing. Avoid wearing any synthetic materials, jewelry, or metallic items. Some centers may provide special clothing to wear during the session.",
  },
  {
    question: "Can I bring electronics or books into the chamber?",
    answer:
      "Typically, electronics are not allowed due to safety concerns. However, you may be able to bring a book or magazine. It's best to check with the treatment center for their specific policies.",
  },
  {
    question: "How soon can I expect to see results from HBOT? ",
    answer:
      "Results can vary depending on the condition being treated and individual factors. Some patients may notice improvements after a few sessions, while others may require more sessions to see significant benefits.",
  },
  {
    question: "Are there any dietary restrictions before or after HBOT sessions?",
    answer:
      "It's generally recommended to avoid alcohol and caffeine before sessions. Eating a light meal before treatment can help prevent low blood sugar, which can cause dizziness.",
  },
  {
    question: "Can I combine HBOT with other treatments?",
    answer:
      "Yes, HBOT is often used in conjunction with other treatments. Always consult your healthcare provider to ensure that combining therapies is safe and beneficial for your specific condition.",
  },
  {
    question: "What is the difference between a monoplace and a multiplace hyperbaric chamber?",
    answer:
      "A monoplace chamber is designed for one person and is typically pressurized with 100% oxygen. A multiplace chamber can accommodate multiple people and is pressurized with air while patients breathe oxygen through masks or hoods.",
  },
  {
    question: "How is HBOT different from oxygen therapy at home?",
    answer:
      "HBOT delivers oxygen at higher pressures than home oxygen therapy, allowing for significantly higher concentrations of oxygen to be absorbed by the body's tissues, promoting more effective healing and recovery.",
  },
  {
    question: "What pressure does your hyperbaric chamber operate at?",
    answer:
      "Our HBOT chamber operates at 1.5 ATA (50 kPa), providing a safe and effective oxygen therapy experience.",
  },
  {
    question: "How long does it take to pressurize and depressurize the chamber?",
    answer:
      "The pressurization process takes about 8-9 minutes, while depressurization takes approximately 2 minutes, which is equivalent to surfacing from a depth of 18 feet in water.",
  },
  {
    question: "Is the oxygen concentration inside the chamber 100%?",
    answer:
      "No, the oxygen concentration inside the chamber itself reaches up to 35%. However, when using an oxygen mask, the concentration can reach up to 95% for enhanced therapeutic benefits.",
  },
  {
    question: "Does this chamber pose a fire hazard due to high oxygen levels?",
    answer:
      "No, because the chamber does not operate at 100% oxygen, it does not create the same fire risk as some hospital-grade hyperbaric units. This makes it a safer option while still delivering effective oxygen therapy.",
  },
  {
    question: "How does the oxygen inside the chamber compare to breathing normal air?",
    answer:
      "Normal atmospheric air contains about 21% oxygen. Inside our hyperbaric chamber, oxygen levels reach up to 35% without a mask, and up to 95% when using an oxygen mask.",
  },
  {
    question: "How does your chamber differ from medical-grade HBOT chambers?",
    answer:
      "Medical-grade HBOT chambers in hospitals can reach 2.0-3.0 ATA with 100% oxygen, requiring strict fire safety measures. Our chamber operates at a safer 1.5 ATA, providing increased oxygen absorption without the risks associated with 100% oxygen environments.",
  },
  {
    question: "What are the benefits of using an oxygen mask inside the chamber?",
    answer:
      "Using an oxygen mask allows for a much higher oxygen concentration of up to 95%, leading to improved circulation, faster healing, and better overall therapeutic effects compared to breathing the chamber’s ambient oxygen alone.",
  },
  {
    question: "What conditions can be treated effectively at 1.5 ATA?",
    answer:
      `While there is not a precise science to this, studies have shown that many conditions & benefit come from hyperbaric therapy at 1.5 ATA, including but not limited to:<br/>- Anti-aging & skin rejuvenation<br/>- Sports recovery & muscle repair<br/>- Chronic fatigue & brain fog<br/>- Post-surgical healing<br/>- Immune system support<br/>- Inflammation reduction`,
  },
  {
    question: "Is 1.5 ATA effective if some hospital chambers go up to 3.0 ATA?",
    answer:
      "Yes! Studies have shown that 1.3-1.5 ATA can still provide significant benefits, especially for inflammation, recovery, and general wellness. Higher pressures are typically reserved for severe medical conditions like carbon monoxide poisoning or radiation injuries.",
  },
  {
    question: "How does this chamber simulate the experience of being underwater?",
    answer:
      "At 1.5 ATA, your body experiences pressure similar to being 18 feet underwater. This mild increase in atmospheric pressure helps oxygen dissolve more effectively into the bloodstream, enhancing the body's natural healing process.",
  },
];

const ITEMS_PER_PAGE = 8;

export default function FAQs() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(faqs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedFaqs = faqs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>
      <Header />
      <HeroOverlay
        mainText="FREQUENTLY ASKED QUESTIONS"
        subText="Find answers to common questions about our services and mobile healthcare solutions."
        src="/FAQs1.jpg"
        style={{ height: "1200px" }}
      />

      <div className="grid grid-flow-row gap-y-10 px-8 md:px-20 mt-20">
        <h1 className="font-bold text-3xl lg:text-6xl">FAQs</h1>
        <p className="text-sm lg:text-xl max-w-2xl">
          Find answers to common questions about Hyperbaric Oxygen Therapy (HBOT) and healthcare solutions.
        </p>
        <Divider className="w-full h-[2px] bg-black shadow-md" />

        {paginatedFaqs.map((faq, index) => (
          <div key={index} tabIndex={0} className="collapse collapse-arrow border border-gray-300 bg-gray-100 p-4 rounded-lg">
            <div className="collapse-title font-bold text-sm lg:text-lg">{faq.question}</div>
            <div className="collapse-content text-sm lg:text-lg" dangerouslySetInnerHTML={{__html:faq.answer}}></div>
          </div>
        ))}
        
        <div className="flex justify-center items-center space-x-4 mt-8 pb-4">
          <button 
            className="px-4 py-2 bg-black text-white rounded disabled:opacity-50" 
            disabled={currentPage === 1} 
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <span className="text-lg">Page {currentPage} of {totalPages}</span>
          <button 
            className="px-4 py-2 bg-black text-white rounded disabled:opacity-50" 
            disabled={currentPage === totalPages} 
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>

      <Divider
          className="w-[75%] h-[2px] mb-8 justify-self-center"
          style={{
            backgroundColor: "black",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          }}
        />

        <div className="gap-y-2 grid mb-20 px-8 md:px-20">
          <h1 className=" font-bold text-xl ml-[-2px] lg:text-5xl lg:leading-[5rem]">
            Still have Questions?
          </h1>
          <p className="text-base lg:text-[1.7rem] lg:leading-[60px]  max-w-[90%]">
            {" "}
            Contact us today!
          </p>
         
            <a className="w-fit" href="/Contact-Us">

            <Button
            type="button"
            text="Contact"
            className="rounded-[4px] border-solid border-2 border-black"
            style={{
              backgroundColor: "black",
              color: "white",
              height: "38px",
              width: "102px",
            }}
            onClick={()=>{}}
            />
            </a>
        </div>
     

      <BaseFooter />
      <GeneralFooter />
    </div>
  );
}