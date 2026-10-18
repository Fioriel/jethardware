import { useEffect, useState } from "react";
import { policies } from "./policies";

export default function Right({ currentPolicy }) {
  const [activeId, setActiveId] = useState(null);

useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll(".policy-content section");
    let current = null;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) {
        current = section.id;
      }
    });

    setActiveId(current);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, [currentPolicy]);


  const policy = Object.values(policies.categories)
    .flatMap((cat) => Object.entries(cat.policies))
    .find(([key]) => key === currentPolicy)?.[1];

  if (!policy) return <aside className="policy-toc">Select a policy</aside>;

  return (
    <aside className="policy-toc">
      <h3>Table of Contents</h3>
      <ul>
        {policy.sections.map((sec) => (
          <li
            key={sec.id}
            className={activeId === sec.id ? "active" : ""}
          >
            <a href={`#${sec.id}`}>{sec.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
