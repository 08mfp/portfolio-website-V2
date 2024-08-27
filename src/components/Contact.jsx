import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: !value ? "This field is required" : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name) newErrors.name = "This field is required";
    if (!form.email) newErrors.email = "This field is required";
    if (!form.subject) newErrors.subject = "This field is required";
    if (!form.message) newErrors.message = "This field is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // alert("Please fill in all the fields before submitting.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          to_name: form.name,
          from_name: "Mohamed Farid",
          from_email: form.email,
          to_email: "mohfarid1webdev@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Your email has been sent. If I do not reply within 1 day, please contact me via LinkedIn.");

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setErrors({});
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Sorry, something went wrong. Please try again or contact me via LinkedIn.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl border-2 border-white'  // change border here if you want
      >
        <p className={styles.sectionSubText}>Have any Questions or Opportunities?</p>
        <h3 className={styles.sectionHeadText}>Contact Me:</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Please enter your full name"
              className={`py-4 px-6 rounded-lg outline-none border-none font-medium ${
                errors.name ? "bg-red-200 placeholder:text-red-600" : "bg-white placeholder:text-secondary text-tertiary"
              }`}
            />
            {errors.name && <span className="text-red-600">{errors.name}</span>}
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Please enter your email"
              className={`py-4 px-6 rounded-lg outline-none border-none font-medium ${
                errors.email ? "bg-red-200 placeholder:text-red-600" : "bg-white placeholder:text-secondary text-tertiary"
              }`}
            />
            {errors.email && <span className="text-red-600">{errors.email}</span>}
          </label>

          <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Subject</span>
              <input
                type='text'
                name='subject'
                value={form.subject}
                onChange={handleChange}
                placeholder='Question. Opportunity. Anything!'
                className={`py-4 px-6 rounded-lg outline-none border-none font-medium ${
                  errors.subject ? "bg-red-200 placeholder:text-red-600" : "bg-white placeholder:text-secondary text-tertiary"
                }`}
              />
              {errors.subject && <span className="text-red-600">{errors.subject}</span>}
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className={`py-4 px-6 rounded-lg outline-none border-none font-medium ${
                errors.message ? "bg-red-200 placeholder:text-red-600" : "bg-white placeholder:text-secondary text-tertiary"
              }`}
            />
            {errors.message && <span className="text-red-600">{errors.message}</span>}
          </label>

          <button
            type='submit'
            className='bg-white py-3 px-8 rounded-xl outline-none w-fit text-tertiary font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
