import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", query: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const validate = (fields) => {
    const errs = {};
    // Name required
    if (!fields.name.trim()) {
      errs.name = "Name is required";
    }
    // Email required & basic pattern
    if (!fields.email) {
      errs.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(fields.email)) {
      errs.email = "Email address is invalid";
    }
    // Query required, at least 10 chars
    if (!fields.query.trim()) {
      errs.query = "Please enter your question or message";
    } else if (fields.query.trim().length < 10) {
      errs.query = "Your message should be at least 10 characters";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // If they've already tried to submit, re-validate on change:
    if (submitted) {
      setErrors(validate({ ...form, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setSubmitted(true);

    if (Object.keys(validationErrors).length === 0) {
      // all good — you can send your request here
      console.log("Form data:", form);
      setForm({ name: "", email: "", query: "" });
    }
  };

  return (
    <Layout>
      <div>
        <div className="h-screen mt-6 md:h-96">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_l1mdtmmb.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="w-full flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="md:w-11/12 w-1/2 p-10 shadow-2xl bg-gray-50 rounded-md"
            noValidate
          >
            <h1 className="text-2xl font-semibold">Contact me</h1>

            <div className="mt-5">
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className={`w-full border-2 rounded-md p-2 shadow-lg outline-none ${
                  errors.name ? "border-red-500" : "border-gray-400"
                }`}
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="mt-5">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className={`w-full border-2 rounded-md p-2 shadow-lg outline-none ${
                  errors.email ? "border-red-500" : "border-gray-400"
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mt-5">
              <textarea
                name="query"
                placeholder="Query"
                value={form.query}
                onChange={handleChange}
                className={`w-full border-2 rounded-md p-2 shadow-lg outline-none h-32 resize-none ${
                  errors.query ? "border-red-500" : "border-gray-400"
                }`}
              />
              {errors.query && (
                <p className="text-red-600 text-sm mt-1">{errors.query}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-green-500 rounded px-5 py-2 mt-6 hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
