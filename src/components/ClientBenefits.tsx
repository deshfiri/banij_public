const clientBenefits = [
  {
    number: "01",
    title: "Reach more customers",
    text: "A clear online presence helps the right people find your business and understand what you offer.",
  },
  {
    number: "02",
    title: "Turn interest into sales",
    text: "Thoughtful design and messaging make it easier for visitors to take the next step and become customers.",
  },
  {
    number: "03",
    title: "Save time and grow steadily",
    text: "Reliable tools and ongoing support reduce everyday friction, so you can focus on running your business.",
  },
];

const accent = "text-[#FD6B04]";

export default function ClientBenefits() {
  return (
    <section className="mt-8 rounded-2xl border border-base-300 bg-transparent px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#FD6B04]">Business outcomes</p>
        <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
          How your business <span className={accent}>benefits</span>
        </h2>
        <p className="mt-3 text-base-content/70">
          Practical improvements that help you attract customers, earn trust, and make growth easier to manage.
        </p>
      </div>

      <ol className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
        {clientBenefits.map((benefit) => (
          <li key={benefit.number} className="border-t-2 border-[#FD6B04]/30 px-2 py-5">
            <span className="text-sm font-bold text-[#FD6B04]">{benefit.number}</span>
            <h3 className="mt-3 text-xl font-bold">{benefit.title}</h3>
            <p className="mt-2 leading-relaxed text-base-content/70">{benefit.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
