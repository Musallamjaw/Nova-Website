import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const thiForm = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      projectDetails: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      subject: Yup.string().required("Please enter a subject"),
      projectDetails: Yup.string().required("Please add some details"),
    }),
    onSubmit: (values) => {
      emailjs
        .send(
          'service_mcwc7jk',
          'template_th1hr9e',
          values,              
          'BOVE0Nx0zSc7tJed4'
        )
        .then(
          // eslint-disable-next-line no-unused-vars
          (result) => {
            toast.success('Message sent successfully!');
            formik.resetForm();
          },
          (error) => {
            toast.error('Error sending message:', error.text);
          }
        );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mx-auto p-8 bg-white rounded">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-semibold text-thi-color">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            {...formik.getFieldProps("name")}
            className={`mt-1 block w-full px-3 py-2 border ${formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="font-semibold text-thi-color flex flex-col gap-2">
            Email <p className='text-sm'>(You must enter your correct email so we can respond to your message)</p>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            {...formik.getFieldProps("email")}
            className={`mt-1 block w-full px-3 py-2 border ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="subject" className="block font-semibold text-thi-color">
            Message Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            {...formik.getFieldProps("subject")}
            className={`mt-1 block w-full px-3 py-2 border ${formik.touched.subject && formik.errors.subject ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.subject}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="projectDetails" className="block font-semibold text-thi-color">
          Details
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          {...formik.getFieldProps("projectDetails")}
          rows="4"
          className={`mt-1 block w-full px-3 py-2 border ${formik.touched.projectDetails && formik.errors.projectDetails ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
        />
        {formik.touched.projectDetails && formik.errors.projectDetails ? (
          <p className="text-red-500 text-xs mt-1">{formik.errors.projectDetails}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="mt-6 w-full text-lg font-bold py-2 px-4 bg-thi-color text-white rounded-md shadow hover:bg-yellow-600 transition-all duration-300"
      >
        Submit
      </button>
      <p className="text-center text-gray-500 text-sm mt-4">
        You will receive a response within 24 hours.
      </p>
    </form>
  );
};

export default thiForm;
