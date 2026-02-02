
import React from 'react';

const ProblemSlider: React.FC = () => {
  const problems = [
    {
      id: "01",
      title: "Zu viele Kunden, zu wenig Fokus",
      desc: "Echte Exzellenz entsteht nicht, wenn man 10–20 Projekte gleichzeitig betreut.",
      img: "https://picsum.photos/seed/p1/400/300"
    },
    {
      id: "02",
      title: "Retainer, die dich klein halten",
      desc: "Du gibst 100%, bekommst aber nur 3–7k pro Monat. Für Ergebnisse, die hunderttausende wert sind.",
      img: "https://picsum.photos/seed/p2/400/300"
    },
    {
      id: "03",
      title: "Du baust kein Asset auf",
      desc: "Keine Anteile, kein Buyout, kein Equity – nur monatliche Dienstleistung gegen Fixum.",
      img: "https://picsum.photos/seed/p3/400/300"
    },
    {
      id: "04",
      title: "Umsatz, aber kaum Gewinn",
      desc: "Du machst fünf- oder sechsstellige Monate, aber am Ende bleibt fast nichts übrig.",
      img: "https://picsum.photos/seed/p4/400/300"
    },
    {
      id: "05",
      title: "Dauerstress statt Wachstum",
      desc: "Deadlines, Meeting-Marathons und Krisen – kein Wunder, dass du permanent im Stress bist.",
      img: "https://picsum.photos/seed/p5/400/300"
    },
    {
      id: "06",
      title: "Austauschbar trotz Expertise",
      desc: "Du bringst Ergebnisse und bist trotzdem ersetzbar. Wie ein Tool, nicht wie ein Partner.",
      img: "https://picsum.photos/seed/p6/400/300"
    }
  ];

  return (
    <section id="agentur-dilemma" className="py-24 bg-white text-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Warum Marketer mit dem klassischen Agenturmodell oft unzufrieden sind
          </h2>
          <p className="text-lg text-[#111111]/60">
            Als Marketer lieferst du gute Arbeit. Aber dein Einkommen stagniert. Deine Freiheit bleibt aus. Dein Impact ist begrenzt. Du bist in einem Modell gefangen, das von Anfang an falsch aufgesetzt war.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div key={p.id} className="group p-8 rounded-3xl bg-[#f5f5f7] border border-transparent hover:border-accent/20 transition-all duration-300">
              <div className="text-4xl font-black text-[#111111]/10 mb-6 group-hover:text-accent/20 transition-colors">{p.id}</div>
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <p className="text-[#111111]/60 mb-6">{p.desc}</p>
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-white/50">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSlider;
