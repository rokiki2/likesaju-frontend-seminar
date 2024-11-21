import { useState } from 'react';
import { OutputCardBack } from './output-card-back';
import { OutputCardFront } from './output-card-front';

export const OutputCard = ({ data, isLocked }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="group [perspective:1000px]">
      <div
        className={`relative w-[500px] h-[370px] transition-transform duration-1000 [transform-style:preserve-3d] cursor-pointer ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
        onClick={flipCard}
      >
        <OutputCardFront data={data} />
        <OutputCardBack data={data} isLocked={isLocked} />
      </div>
    </div>
  );
};
