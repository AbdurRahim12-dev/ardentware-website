import { useForm } from 'react-hook-form';
import Header_Text from '../ui/Header_Text/Header_Text';
import { BiRightArrow } from 'react-icons/bi';

const ServiceContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formFields = [
    {
      name: 'First Name',
      type: 'text',
      required: true,
      validation: {
        required: 'First Name is required',
      },
      placeholder: 'First Name',
    },
    {
      name: 'Last Name',
      type: 'text',
      required: true,
      validation: {
        required: 'Last Name is required',
      },
      placeholder: 'Last Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      validation: {
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address',
        },
      },
      placeholder: 'Email',
    },
    {
      name: 'Phone',
      type: 'tel',
      required: true,
      validation: {
        required: 'Contact number is required',
        pattern: {
          value: /^[0-9+-\s()]*$/,
          message: 'Invalid phone number',
        },
      },
      placeholder: 'Phone Number',
    },
    {
      name: 'Company',
      type: 'text',
      required: true,
      validation: {
        required: 'Company is required',
      },
      placeholder: 'Organization',
    },
    {
      name: 'Job Title',
      type: 'text',
      required: true,
      validation: {
        required: 'Job Title is required',
        // pattern: {
        //   value: /^[0-9+-\s()]*$/,
        //   message: 'Invalid phone number',
        // },
      },
      placeholder: 'Job Title',
    },
    {
      name: 'Country',
      type: 'select',
      required: true,
      placeholder: 'Select Country',
      options: [
        'United States',
        'Canada',
        'Afghanistan',
        'Albania',
        'Algeria',
        'American Samoa',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antarctica',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Brazil',
        'British Indian Ocean Territory',
        'British Virgin Islands',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cambodia',
        'Cameroon',
        'Cape Verde',
        'Cayman Islands',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Christmas Island',
        'Cocos (Keeling) Islands',
        'Colombia',
        'Comoros',
        'Congo',
        'Cook Islands',
        'Costa Rica',
        'Croatia',
        'Cuba',
        'Curaçao',
        'Cyprus',
        'Czech Republic',
        'Côte d’Ivoire',
        'Democratic Republic of the Congo',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Ethiopia',
        'Falkland Islands',
        'Faroe Islands',
        'Fiji',
        'Finland',
        'France',
        'French Guiana',
        'French Polynesia',
        'French Southern Territories',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Grenada',
        'Guadeloupe',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Honduras',
        'Hong Kong S.A.R., China',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Isle of Man',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jersey',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        'Kuwait',
        'Kyrgyzstan',
        'Laos',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macao S.A.R., China',
        'Macedonia',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Martinique',
        'Mauritania',
        'Mauritius',
        'Mayotte',
        'Mexico',
        'Micronesia',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'New Caledonia',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Niue',
        'Norfolk Island',
        'North Korea',
        'Northern Mariana Islands',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Palestinian Territory',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Pitcairn',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Qatar',
        'Romania',
        'Russia',
        'Rwanda',
        'Réunion',
        'Saint Barthélemy',
        'Saint Helena',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Pierre and Miquelon',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Korea',
        'South Sudan',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Suriname',
        'Svalbard and Jan Mayen',
        'Swaziland',
        'Sweden',
        'Switzerland',
        'Syria',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        'Timor-Leste',
        'Togo',
        'Tokelau',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Turks and Caicos Islands',
        'Tuvalu',
        'U.S. Virgin Islands',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States Minor Outlying Islands',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Vatican',
        'Venezuela',
        'Viet Nam',
        'Wallis and Futuna',
        'Western Sahara',
        'Yemen',
        'Zambia',
        'Zimbabwe',
        'Kosavo',
      ],
      validation: {
        required: 'Please select a Country',
      },
    },
    {
      name: 'inquiryType',
      type: 'select',
      required: true,
      placeholder: 'Select Inquiry Type',
      options: ['General Inquiry', 'Technical Support', 'Sales', 'Partnership', 'Other'],
      validation: {
        required: 'Please select an inquiry type',
      },
    },
    {
      name: 'message',
      type: 'textarea',
      required: false,
    },
    {
      name: 'privacyConsent',
      type: 'checkbox',
      required: true,
      label:
        'I would like Cognizant to contact me based on the information provided above. I agree to the processing of my personal data as described in the Privacy Notice.',
      validation: {
        required: 'You must agree to the privacy policy',
      },
    },
  ];

  const onSubmit = (data) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <section className='container md:py-16 mt-10 md:mt-0'>
      <Header_Text
        title='Take the first step'
        description='Serving customers by looking forward as well as back is a big promise, but the power of today’s new digital capabilities, including data and AI, is vast and growing.'
      />

      <p className='mt-5 text-xl font-normal text-primary'>Let’s talk about how data and AI can work for your business.</p>

      <form onSubmit={handleSubmit(onSubmit)} className='mt-10 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {formFields.map((field) => {
            if (field.type === 'textarea' || field.type === 'checkbox') {
              return null;
            }

            return (
              <div key={field.name} className='col-span-1'>
                {/* {field.type !== 'select' && (
                  <label
                    htmlFor={field.name}
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    {field.name.charAt(0).toUpperCase() +
                      field.name.slice(1).replace(/([A-Z])/g, ' $1')}
                    {field.required && <span className='text-red-500'>*</span>}
                  </label>
                )} */}

                {/* <div class='relative'>
                  <input
                    type='text'
                    id={field.name}
                    placeholder=''
                    {...register(field.name, field.validation)}
                    className='peer w-full rounded-lg border border-gray-200 px-4 pb-2 pt-6 text-base outline-none transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary  bg-orange-50'
                    onfocus={() => (field.placeholder = field.name)}
                    onblur={() => (field.placeholder = '')}
                  />
                  <label
                    for={field.name}
                    className='absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-gray-500 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-blue-500'
                  >
                    {' '}
                    {field.name.charAt(0).toUpperCase() +
                      field.name.slice(1).replace(/([A-Z])/g, ' $1')}
                       {field.required && <span className='text-red-500'>*</span>}
                  </label>
                </div> */}
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

        {/* Checkbox - full width */}
        <div className='mt-6'>
          <div className='flex items-start'>
            <div className='flex items-center h-6'>
              <input
                id='privacyConsent'
                type='checkbox'
                {...register('privacyConsent', {
                  required: 'You must agree to the privacy policy',
                })}
                className='h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary'
              />
            </div>
            <div className='ml-3'>
            <span className={`${errors.privacyConsent && "text-red-600"}`}>*</span>
              <label htmlFor='privacyConsent' className={`text-primary text-xl ${errors.privacyConsent && "text-red-600"}`}>
                I would like Cognizant to contact me based on the information provided above. I
                agree to the processing of my personal data as described in the{' '}
                <span className='text-accent underline font-bold'>Privacy Notice</span>.
                
              </label>
              {/* {errors.privacyConsent && (
                <p className='mt-1 text-sm text-red-600'>{errors.privacyConsent.message}</p>
              )} */}
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <button
            type='submit'
            className='rounded-full bg-secondary px-6 py-3 text-primary text-xl font-bold hover:bg-secondary/60 focus:outline-none focus:ring-2 focus:ring-secobg-secondary focus:ring-offset-2 inline-flex items-center gap-2 duration-300'
          >
            Submit <BiRightArrow />
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

export default ServiceContactUs;
