import { lazy } from "react";

const Questions_Form = lazy(() => import('../components/Home/Questions_Form'));

export default function ContactPage() {
  return (
    <div className='py-8'>
      <Questions_Form />
    </div>
  );
}
