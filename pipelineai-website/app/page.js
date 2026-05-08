export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          backgroundColor: "#0b0f19",
          color: "#ffffff",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "700" }}>
          AI-Powered Lead Generation for IT Firms
        </h1>

        <p
          style={{
            fontSize: "18px",
            marginTop: "20px",
            color: "#b0b8c5",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          PipelineAI helps IT service companies consistently book
          high-quality sales calls using advanced AI outreach systems.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 28px",
            fontSize: "16px",
            backgroundColor: "#4f46e5",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Book a Demo
        </button>
      </section>

      {/* VALUE SECTION */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px" }}>
          Why IT Firms Choose PipelineAI
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "250px" }}>
            <h3>Automated Outreach</h3>
            <p>No manual prospecting required</p>
          </div>

          <div style={{ maxWidth: "250px" }}>
            <h3>AI Personalization</h3>
            <p>Messages tailored to each prospect</p>
          </div>

          <div style={{ maxWidth: "250px" }}>
            <h3>Higher Close Rates</h3>
            <p>Only qualified IT leads delivered</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <h2 style={{ fontSize: "32px" }}>
          Ready to scale your IT firm with AI?
        </h2>

        <p style={{ marginTop: "10px" }}>
          Get predictable sales pipelines without cold calling or manual outreach.
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "14px 28px",
            fontSize: "16px",
            backgroundColor: "#111827",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </section>

    </main>
  );
}