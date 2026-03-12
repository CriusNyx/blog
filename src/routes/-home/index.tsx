import { Link } from "@tanstack/react-router";

export function Home() {
  return (
    <div className="flex flex-col">
      <h1>Home</h1>
      <Link to="/blog/architecture">
        <h3>How I make React Apps</h3>
      </Link>
      <Link to="/blog/failedProjects">
        <h3>Projects that failed (And some that didn't)</h3>
      </Link>
      <Link to="/blog/doingCoolThingsWithMarkdown/">
        <h3>Doing Cool Things (with Markdown)</h3>
      </Link>
      <Link to="/blog/doingCoolThingsWithMarkdown2/">
        <h3>Doing Cool Things (with Markdown 2)</h3>
      </Link>
      <Link to="/blog/themesAndStyles/">
        <h3>Themes and Styles</h3>
      </Link>
    </div>
  );
}
