export const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 bg-background text-foreground">
      <h1 className="text-5xl font-bold">
        4<span className="text-primary">0</span>4
      </h1>
      <p className="text-muted-foreground">This page doesn't exist.</p>
      <a href="/" className="cosmic-button">
        Back to home
      </a>
    </main>
  );
};
