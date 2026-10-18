import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Alert from "@mui/material/Alert";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { company } from "../../../data/company";

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone is required"),
  item: Yup.string().required("Tell us what you need"),
});

const Quote = () => {
  const [status, setStatus] = useState(null);

  return (
    <>
      <BreadCrumb
        title="Ask for a Quote"
        subtitle="No online checkout on this site"
        description="Tell the store what you need. This form opens your email app. You can also text or call 0915 746 6128."
        breadcrumb={[{ label: "Quote" }]}
      />
      <section className="bg-white px-6 py-16">
        <Formik
          initialValues={{ name: "", phone: "", email: "", item: "" }}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            const body = `Name: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\n\nNeeded:\n${values.item}`;
            window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Quote request from the website")}&body=${encodeURIComponent(body)}`;
            setStatus("Your email app should open with this request. If it does not, call or text the store.");
            resetForm();
          }}
        >
          <Form className="mx-auto flex max-w-[720px] flex-col gap-5">
            <Field name="name" placeholder="Your name*" className="h-14 w-full border border-[#dce1e5] px-4" />
            <ErrorMessage name="name" component="p" className="text-sm text-red-500" />
            <Field name="phone" placeholder="Mobile number*" className="h-14 w-full border border-[#dce1e5] px-4" />
            <ErrorMessage name="phone" component="p" className="text-sm text-red-500" />
            <Field name="email" type="email" placeholder="Email (optional)" className="h-14 w-full border border-[#dce1e5] px-4" />
            <Field as="textarea" name="item" placeholder="Materials, sizes, or job details*" className="h-36 w-full border border-[#dce1e5] px-4 py-3" />
            <ErrorMessage name="item" component="p" className="text-sm text-red-500" />
            {status && <Alert severity="success">{status}</Alert>}
            <button type="submit" className="primary-btn w-fit">
              Email this request
            </button>
          </Form>
        </Formik>
      </section>
    </>
  );
};

export default Quote;
