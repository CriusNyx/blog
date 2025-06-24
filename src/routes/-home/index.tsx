import { Link } from "@tanstack/react-router";

export function Home() {
  return (
    <div className="flex flex-col">
      <h1>Home</h1>
      <Link to="/blog/themesAndStyles/">
        <h4>Themes and Styles</h4>
      </Link>
      <Link to="/blog/doingCoolThingsWithMarkdown/">
        <h4>Doing Cool Things (with Markdown)</h4>
      </Link>
      <Link to="/blog/doingCoolThingsWithMarkdown2/">
        <h4>Doing Cool Things (with Markdown 2)</h4>
      </Link>
      <Link to="/blog/jeremy/">
        <h4>Jeremy</h4>
      </Link>
    </div>
  );
}
