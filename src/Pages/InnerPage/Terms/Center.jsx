import { policies } from "./policies";

export default function Center({ currentPolicy }) {
  const policy = Object.values(policies.categories)
    .flatMap(cat => Object.entries(cat.policies))
    .find(([key]) => key === currentPolicy)?.[1];

  if (!policy)
    return <main className="policy-content">Select a policy to view details</main>;

  return (
    <main className="policy-content">
      <h1>{policy.title}</h1>
      <p className="last-updated">Last Updated: {policy.lastUpdated}</p>

      {policy.sections.map(sec => (
        <section key={sec.id} id={sec.id}>
          <h2>{sec.title}</h2>
          {sec.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      ))}
    </main>
  );
}
