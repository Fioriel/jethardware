import { Link } from "react-router-dom";
import { company } from "../../data/company";

const ErrorPage = () => {
  return (
    <main className="grid min-h-[70vh] bg-white lg:grid-cols-[320px_1fr]">
      <div className="flex items-end bg-[#C41230] px-8 py-12">
        <p className="font-Rajdhani text-8xl font-bold leading-none text-white">404</p>
      </div>
      <div className="flex flex-col justify-end px-6 py-14 sm:px-12">
        <p className="font-Nunito text-sm font-semibold uppercase tracking-[0.18em] text-[#C41230]">
          {company.shortName}
        </p>
        <h1 className="mt-3 font-Rajdhani text-5xl font-bold text-[#141414]">
          This page is not on the store website.
        </h1>
        <Link
          to="/"
          className="mt-8 inline-flex h-12 w-fit items-center bg-[#141414] px-8 font-Rajdhani text-lg font-bold text-white"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
