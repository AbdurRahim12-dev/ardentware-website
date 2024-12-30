import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className='container flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Oops!</h1>
      <p className='text-2xl font-bold'>Sorry, an unexpected error has occurred.</p>
      <p className='text-xl font-bold'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
