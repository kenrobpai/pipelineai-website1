export const metadata = {
  title: "PipelineAI",
  description: "AI-powered pipeline growth for IT firms"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{margin:0,fontFamily:"Arial",background:"#020617",color:"white"}}>
        {children}
      </body>
    </html>
  );
}
