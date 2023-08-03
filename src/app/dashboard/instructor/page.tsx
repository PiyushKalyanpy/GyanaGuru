'use client';

import { UserAuth } from '@/context/authContext';
import { useRouter, redirect } from 'next/navigation';
import Stepper from '@/components/Stepper';
import Curriculum from './components/Curriculum';
import CourseLandingPage from './components/CourseLandingPage';
import Pricing from './components/Pricing';

const CourseAddition = () => {
  const steps = [
    {
      stepName: 'Curriculum',
      message:
        "Your course's public visibility and performance depend on these descriptions. They help potential learners decide if your course is suitable for them.",
      element: <Curriculum />,
    },
    {
      stepName: 'Course Landing Page',
      message:
        "Your course's public visibility and performance depend on these descriptions. They help potential learners decide if your course is suitable for them.",
      element: <CourseLandingPage />,
    },
    {
      stepName: 'Pricing',
      message:
        "Your course's public visibility and performance depend on these descriptions. They help potential learners decide if your course is suitable for them.",
      element: <Pricing />,
    },
  ];
  return (
    <div className="bg-white rounded-2xl w-full h-full overflow-hidden overflow-y-scroll ">
      <Stepper steps={steps} />
    </div>
  );
};

const Instructor = () => {
  const { currentUser } = UserAuth();
  if (currentUser && !currentUser.isInstructor) {
    redirect('/dashboard');
  }
  return (
    <div className="bg-zinc-100 w-full h-full ">
      <CourseAddition />
    </div>
  );
};

export default Instructor;