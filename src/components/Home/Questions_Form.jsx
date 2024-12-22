import { useForm } from "react-hook-form";
import Header_Text from "../ui/Header_Text/Header_Text";
import { BiRightArrow } from "react-icons/bi";

const Questions_Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formFields = [
    {
      name: "name",
      type: "text",
      required: true,
      validation: {
        required: "Name is required",
      },
    },
    {
      name: "email",
      type: "email",
      required: true,
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address",
        },
      },
    },
    {
      name: "organization",
      type: "text",
      required: true,
      validation: {
        required: "Organization is required",
      },
    },
    {
      name: "contactNumber",
      type: "tel",
      required: true,
      validation: {
        required: "Contact number is required",
        pattern: {
          value: /^[0-9+-\s()]*$/,
          message: "Invalid phone number",
        },
      },
    },
    {
      name: "region",
      type: "select",
      required: true,
      placeholder: "Select Region",
      options: ["North America", "Europe", "Asia", "Africa", "South America", "Oceania"],
      validation: {
        required: "Please select a region",
      },
    },
    {
      name: "inquiryType",
      type: "select",
      required: true,
      placeholder: "Select Inquiry Type",
      options: ["General Inquiry", "Technical Support", "Sales", "Partnership", "Other"],
      validation: {
        required: "Please select an inquiry type",
      },
    },
    {
      name: "message",
      type: "textarea",
      required: false,
    },
    {
      name: "privacyConsent",
      type: "checkbox",
      required: true,
      label:
        "I would like Cognizant to contact me based on the information provided above. I agree to the processing of my personal data as described in the Privacy Notice.",
      validation: {
        required: "You must agree to the privacy policy",
      },
    },
  ];

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <section className="container py-16">
      <Header_Text
        title=" Get answers to your questions"
        description="Our clients turn to us to help them reimagine ways of working with technology."
      />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formFields.map((field) => {
            if (field.type === "textarea" || field.type === "checkbox") {
              return null;
            }

            return (
              <div key={field.name} className="col-span-1">
                {field.type !== "select" && (
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.name.charAt(0).toUpperCase() +
                      field.name.slice(1).replace(/([A-Z])/g, " $1")}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                )}

                {field.type === "select" ? (
                  <select
                    id={field.name}
                    {...register(field.name, field.validation)}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-3 px-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-orange-50"
                  >
                    <option value="">{field.placeholder}</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    placeholder={field.placeholder}
                    {...register(field.name, field.validation)}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-3 px-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-orange-50"
                  />
                )}
                {errors[field.name] && (
                  <p className="mt-1 text-sm text-red-600">{errors[field.name].message}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Message textarea - full width */}
        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={4}
            className="mt-1 block w-full rounded-md border border-gray-300 py-3 px-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-orange-50"
          />
        </div>

        {/* Checkbox - full width */}
        <div className="mt-6">
          <div className="flex items-start">
            <div className="flex items-center h-6">
              <input
                id="privacyConsent"
                type="checkbox"
                {...register("privacyConsent", {
                  required: "You must agree to the privacy policy",
                })}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="privacyConsent" className="text-primary text-xl">
                I would like Cognizant to contact me based on the information provided above. I
                agree to the processing of my personal data as described in the{" "}
                <span className="text-accent underline font-bold">Privacy Notice</span>.
                <span className="text-red-500">*</span>
              </label>
              {errors.privacyConsent && (
                <p className="mt-1 text-sm text-red-600">{errors.privacyConsent.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="rounded-full bg-secondary px-6 py-3 text-primary text-xl font-bold hover:bg-secondary/60 focus:outline-none focus:ring-2 focus:ring-secobg-secondary focus:ring-offset-2 inline-flex items-center gap-2 duration-300"
          >
            Submit <BiRightArrow />
          </button>
        </div>
      </form>
      <p className="mt-5 text-primary text-xl">
        This site is protected by reCAPTCHA and the Google{" "}
        <span className="text-accent font-bold underline">Privacy Policy</span> and{" "}
        <span className="text-accent font-bold underline">Terms of Service</span> apply.
      </p>
    </section>
  );
};

export default Questions_Form;
