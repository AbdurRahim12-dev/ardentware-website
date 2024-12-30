import { useForm } from 'react-hook-form';
import Header_Text from '../ui/Header_Text/Header_Text';
import { BiRightArrow } from 'react-icons/bi';
import { ContactFormFields } from '../../libs/contactFormFields';
// import { motion } from 'motion/react';

const Questions_Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <section className='container md:py-16 mt-10 md:mt-0'>
      <Header_Text
        title='How can we help you?'
        description='Our clients rely on us to redefine their technology-driven workflows.'
      />

      <form onSubmit={handleSubmit(onSubmit)} className='mt-10 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {ContactFormFields.map((field) => {
            if (field.type === 'textarea' || field.type === 'checkbox') {
              return null;
            }

            return (
              <div key={field.name} className='col-span-1'>
                {field.type === 'select' ? (
                  <select
                    id={field.name}
                    {...register(field.name, field.validation)}
                    className='mt-1 block w-full rounded-md border border-gray-300 py-3 px-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-gray-100'
                  >
                    <option value=''>{field.placeholder}</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className='relative'>
                    <input
                      type='text'
                      id={field.name}
                      placeholder=' '
                      {...register(field.name, field.validation)}
                      className={`peer w-full rounded-lg border border-gray-200 px-4 pb-2 pt-6 text-base outline-none transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-gray-100 `}
                      // onFocus={() => (field.placeholder = field.name)}
                      // onBlur={() => (field.placeholder = '')}
                    />
                    <label
                      htmlFor={field.name}
                      className='absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-gray-500 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-blue-500'
                    >
                      {field.name.charAt(0).toUpperCase() +
                        field.name.slice(1).replace(/([A-Z])/g, ' $1')}
                      {field.required && <span className='text-red-500'>*</span>}
                    </label>
                  </div>
                )}

                {errors[field.name] && (
                  <p className='mt-1 text-sm text-red-600'>{errors[field.name].message}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Message textarea - full width */}
        <div className='relative'>
          <textarea
            id='message'
            placeholder=''
            rows={4}
            {...register('message')}
            className='peer w-full rounded-lg border border-gray-200 px-4 pb-2 pt-6 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 bg-gray-100 mt-5 '
            // onFocus={() => (field.placeholder = 'Message')}
            // onBlur={() => (field.placeholder = '')}
          />
          <label
            htmlFor='message'
            className='absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-gray-500 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-blue-500 py-4'
          >
            {' '}
            Message
          </label>
        </div>

        <div className='mt-8'>
          <button
            // initial={{ opacity: 0, y: 100 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ amount: 0.8, once: true }}
            // transition={{ duration: 0.8, delay: 0.2 }}
            type='submit'
            className='rounded-full bg-secondary px-6 py-3 text-primary text-xl font-bold hover:bg-secondary/60 focus:outline-none focus:ring-2 focus:ring-secobg-secondary focus:ring-offset-2 inline-flex items-center gap-2 duration-300'
          >
            Submit <BiRightArrow className='text-xl mt-[5px]' />
          </button>
        </div>
      </form>
      {/* <p className='mt-5 text-primary text-xl'>
        This site is protected by reCAPTCHA and the Google{' '}
        <span className='text-accent font-bold underline'>Privacy Policy</span> and{' '}
        <span className='text-accent font-bold underline'>Terms of Service</span> apply.
      </p> */}
    </section>
  );
};

export default Questions_Form;
