export default function ProjectsLayout({ children }) {
  return (
    <main className="relative overflow-hidden">
      <div className="main"></div>
      <div className="app relative">
        {children}
      </div>
    </main>
  );
} 