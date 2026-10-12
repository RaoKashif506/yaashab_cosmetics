
const steps = [
  ["01", "Cleanse", "Wash your face and pat dry."],
  ["02", "Drop", "Apply 2–3 drops to the face."],
  ["03", "Pat in", "Spread gently and press into the skin."],
  ["04", "Moisturize", "Follow with your moisturizer."],
];

export default function RoutineSection() {
  return (
    <section className="routine section-pad">
      <div className="routine-art">
        <div className="routine-disc">
          <span>GLOW</span>
          <span>AT YOUR</span>
          <span>OWN PACE</span>
          <i>✳</i>
        </div>

        <span className="routine-stamp">
          YOUR ROUTINE, REIMAGINED
        </span>
      </div>

      <div className="routine-copy">
        <p className="eyebrow " style={{ fontSize: "15px", fontWeight: 700 }}>
          THREE STEPS TO YOUR SERUM MOMENT
        </p>

        <h2>
          Keep it simple.
          <br />
          <em>Keep it glowing.</em>
        </h2>

        <ol>
          {steps.map(([number, title, copy]) => (
            <li key={number}>
              <span>{number}</span>

              <div>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="routine-footnote">
          In the morning, finish with a broad-spectrum sunscreen.
          UV exposure can worsen pigmentation. Start once daily,
          and continue as directed on the pack if your skin feels
          comfortable.
        </p>
      </div>
    </section>
  );
}
