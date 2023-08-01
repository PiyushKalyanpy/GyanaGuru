import React, { useState } from 'react';
import { StepData } from '@/app/interface/StepData';
import Step from './Step';

const Stepper: React.FC<{ steps: StepData[] }> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(prevStep => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 0));
  };

  const handleSave = () => {
    console.log('Save');
  };

  return (
    <div className="w-full max-w-screen-lg p-4 mx-auto">
      <div className=" flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold">
            {steps[currentStep].stepName}
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-4 py-2 text-white bg-blue-500 rounded-full disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={currentStep === steps.length - 1 ? handleSave : handleNext}
            className="px-4 py-2 text-white bg-blue-500 rounded-full disabled:opacity-50"
          >
            {currentStep === steps.length - 1 ? 'Save' : 'Next'}
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="flex items-center w-full">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className={`flex items-center ${
                  index !== steps.length - 1 ? 'w-full' : 'w-fit'
                }`}
              >
                <div
                  className={`rounded-full h-8 w-8 flex items-center justify-center ${
                    currentStep > index
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-zinc-500 border'
                  } 
                                    ${
                                      currentStep === index &&
                                      'border-2 border-blue-500'
                                    }
                                    `}
                >
                  {index + 1}
                </div>
                {index !== steps.length - 1 ? (
                  <div
                    className={`flex h-1 rounded-full ${
                      currentStep > index ? 'bg-blue-500' : 'bg-gray-200'
                    } ${
                      index !== steps.length - 1
                        ? 'w-full'
                        : 'w-auto bg-red-400'
                    }`}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4">
        <Step {...steps[currentStep]} />
      </div>
    </div>
  );
};

export default Stepper;
