export const dynamic = 'force-dynamic';

export default function HomePage() {
  const deployedAt = new Date().toISOString();
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        background: 'radial-gradient(circle at 30% 20%, #1a1a2e, #0f0f1a 60%)',
        color: '#f5f5f7',
      }}
    >
      <h1 style={{ fontSize: '3rem', margin: 0, letterSpacing: '-0.02em' }}>
        Hello, World.
      </h1>
      <p style={{ marginTop: '1rem', opacity: 0.75, fontSize: '1.1rem' }}>
        Pilot deploy through <code style={{ background: '#2a2a3e', padding: '0.15rem 0.4rem', borderRadius: 4 }}>demo.almostimpossible.agency</code>.
      </p>
      <p style={{ marginTop: '0.4rem', opacity: 0.5, fontSize: '0.85rem' }}>
        Rendered at {deployedAt}
      </p>
    </main>
  );
}
