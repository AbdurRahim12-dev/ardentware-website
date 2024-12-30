export const ContactFormFields = [
    {
      name: 'name',
      type: 'text',
      required: true,
      validation: {
        required: 'Name is required',
      },
      placeholder: 'Name',
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
      name: 'organization',
      type: 'text',
      required: true,
      validation: {
        required: 'Organization is required',
      },
      placeholder: 'Organization',
    },
    {
      name: 'contactNumber',
      type: 'tel',
      required: true,
      validation: {
        required: 'Contact number is required',
        pattern: {
          value: /^[0-9+-\s()]*$/,
          message: 'Invalid phone number',
        },
      },
      placeholder: 'Contact Number',
    },
    {
      name: 'region',
      type: 'select',
      required: true,
      placeholder: 'Select Region',
      options: ['North America', 'Europe', 'Asia', 'Africa', 'South America', 'Oceania'],
      validation: {
        required: 'Please select a region',
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
