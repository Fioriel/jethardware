import { useNavigate } from "react-router-dom";
import { policies } from "./policies";

export default function Left({ currentPolicy, setCurrentPolicy }) {
  const navigate = useNavigate();
  const categories = policies.categories || {};

  const handleClick = (policyKey) => {
    setCurrentPolicy(policyKey);
    navigate(`/terms?policy=${policyKey}`);
  };

  return (
    <aside className="policy-sidebar">
      {Object.entries(categories).map(([catKey, category]) => (
        <div key={catKey} className="category">
          <h3>{category.title}</h3>
          <ul>
            {Object.entries(category.policies).map(([policyKey, policy]) => (
              <li
                key={policyKey}
                className={currentPolicy === policyKey ? "active" : ""}
                onClick={() => handleClick(policyKey)}
              >
                {policy.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
