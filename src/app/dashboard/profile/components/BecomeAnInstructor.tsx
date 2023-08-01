'use client';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { UserAuth } from '@/context/authContext';
import { db } from '@/data/online/firebase';
import { toast } from '@/components/ui/use-toast';

const BecomeAnInstructor = () => {
  const { currentUser, updateCurrentUser } = UserAuth();
  const [checked, setChecked] = useState(currentUser.isInstructor);
  console.log('isInstructor', currentUser.isInstructor);
  const toggleInstructor = async () => {
    await updateDoc(doc(db, 'users', currentUser.uid), {
      isInstructor: !currentUser.isInstructor,
    }).then(() => {
      updateCurrentUser();
      const toastMessage = currentUser.isInstructor
        ? 'You are no longer an instructor'
        : 'You are now an instructor';
      toast({
        description: toastMessage,
      });
    });
  };
  return (
    <div className="relative w-full p-4  bg-white rounded-2xl flex justify-between">
      <div className="flex flex-col space-y-2">
        <h2 className="text-lg font-medium">Become an Instructor</h2>
        <p className=" text-zinc-500">
          Teach what you love. AI Tutor gives you the tools to create a course.
        </p>
      </div>
      <Switch
        className="mt-4"
        checked={checked}
        onCheckedChange={e => {
          toggleInstructor();
          setChecked(!checked);
        }}
      />
    </div>
  );
};

export default BecomeAnInstructor;
