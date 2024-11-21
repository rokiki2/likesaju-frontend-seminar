import { SectionLayout } from './section-layout';
import { useState } from 'react';

export const FAQSection = () => {
  const faqAccordionInfo = [
    {
      question: 'Q. 사주 운세를 확인하고 싶은데, 비용은 무료인가요?',
      answer:
        '첫 번째 질문에 대한 답변입니다. 답변 내용은 어쩌구저꾸입니다.\n첫 번째 질문에 대한 답변입니다. 답변 내용은 어쩌구저꾸입니다.',
    },
    {
      question: 'Q. 어떤 기술이 활용되었나요?',
      answer:
        '두 번째 질문에 대한 답변입니다. 답변 내용은 어쩌구저꾸입니다.\n두 번째 질문에 대한 답변입니다. 답변 내용은 어쩌구저꾸입니다.',
    },
    {
      question:
        'Q. 세 번째 질문입니다. 한 줄까지 들어갈 수 있습니다. 그 이상은 말줄임표 처리합니다. 바로 이렇게... 이렇게... 이렇게... 이렇게... 이렇게...',
      answer:
        '세 번째 질문에 대한 답변입니다. 답변 내용은 어쩌구저꾸입니다.\n세 번째 질문에 대한 답변입니다. 답변 내용은 어쩌구저꾸입니다.',
    },
  ];

  return (
    <SectionLayout>
      <div className="w-full flex flex-col gap-[80px] mobile:gap-[30px]">
        <h3 className="text-left text-4xl nanum-extra-bold mobile:text-2xl">
          FAQs
        </h3>
        <div className="flex flex-col gap-[30px] mobile:gap-5">
          {faqAccordionInfo.map((accordion) => (
            <FAQAccordion
              key={accordion.question}
              question={accordion.question}
              answer={accordion.answer}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-xl px-[50px] py-10 shadow-2xl w-full gap-5 mobile:px-5 mobile:py-5">
      <div className="flex justify-between items-center gap-5">
        <p className="text-xl font-bold truncate mobile:text-base">
          {question}
        </p>
        <button
          className="rounded-full shadow-md transition border border-[#D3D3D3]"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <svg
            className={`transition-transform transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
      <div
        className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <p className="text-lg w-full text-left mt-4 mobile:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
};