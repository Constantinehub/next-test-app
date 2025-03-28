'use client';

import { useRouter } from 'next/navigation';

const GoBack = () => {
  const router = useRouter();

  return (
    <button
      onClick={router.back}
      className="py-2 px-4 rounded-md before:content-['←'] before:mr-2 hover:cursor-pointer bg-amber-300 shadow-md"
    >
      Back
    </button>
  );
};

export default GoBack;
