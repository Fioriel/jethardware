/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BreadCrumb = ({ title, subtitle, description, breadcrumb = [] }) => {
  return (
    <section className="grid min-h-[280px] border-b border-[#E6E6E6] bg-white lg:grid-cols-[320px_1fr]">
      <div className="flex flex-col justify-between bg-[#C41230] px-6 py-8 text-white sm:px-8">
        <nav className="flex flex-wrap items-center gap-2 font-Nunito text-sm text-white/75">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          {breadcrumb.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              <span>/</span>
              {item.url ? (
                <Link to={item.url} className="hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
        {subtitle && (
          <p className="mt-10 font-Rajdhani text-2xl font-semibold leading-tight text-white">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex flex-col justify-end px-6 py-10 sm:px-10 lg:px-14">
        <h1 className="max-w-4xl font-Rajdhani text-5xl font-bold leading-[0.95] text-[#141414] sm:text-6xl">
          {title}
        </h1>
        {description && (
          <div className="mt-5 max-w-2xl font-Nunito leading-relaxed text-[#5C6370]">
            {description}
          </div>
        )}
      </div>
    </section>
  );
};

export default BreadCrumb;
