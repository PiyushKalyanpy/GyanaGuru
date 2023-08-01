import React from 'react';
import { StepData } from '@/app/interface/StepData';

const Step: React.FC<StepData> = step => {
  const { stepName, message, element } = step;
  return (
    <div className="step flex flex-col space-y-8 py-4 ">
      <p className="text-zinc-600">{message}</p>
      <div className="step-content">{element}</div>
    </div>
  );
};

export default Step;
