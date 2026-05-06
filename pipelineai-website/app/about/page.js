import Image from 'next/image';
export default function About(){
  return <main style={{padding:'60px'}}>
    <h1>Kendall Robinson — Founder, PipelineAI</h1>
    <p>Helping IT firms build predictable pipeline through AI-powered outbound growth systems.</p>
    <Image src="/kendall-robinson.jpg" alt="Kendall Robinson" width={300} height={400} />
  </main>
}
