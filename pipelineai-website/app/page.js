export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "#0b0f19",
        color: "white"
      }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
          AI-Powered Lead Generation for IT Firms
        </h1>

        <p style={{ fontSize: "18px", marginTop: "20px", color: "#b0b8c5" }}>
          PipelineAI helps IT service companies consistently book high-quality sales calls using advanced AI outreach systems.
        </p>

        <button style={{
          marginTop: "30px",
          padding: "15px 30px",
          fontSize: "16px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Book a Demo
        </button>
      </section>

      {/* VALUE SECTION */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Why IT Firms Choose PipelineAI</h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}>
          <div>
            <h3>Automated Outreach</h3>
            <p>No manual prospecting required</p>
          </div>

          <div>
            <h3>AI Personalization</h3>
            <p>Messages tailored to each prospect</p>
          </div>

          <div>
            <h3>Higher Close Rates</h3>
            <p>Only qualified IT leads delivered</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#f5f5f5"
      }}>
        <h2>Ready to scale your IT firm with AI?</h2>
        <p>Get predictable sales pipelines without cold calling or manual outreach.</p>

        <button style={{
          marginTop: "20px",
          padding: "15px 30px",
          fontSize: "16px",
          background: "#111827",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Get Started
        </button>
      </section>

    </main>
  );
}