// components/Footer.tsx

/**
 * Footer is a simple, reusable UI block for the bottom of every page.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container" style={{ paddingBlock: "2rem", borderTop: "1px solid #e5e7eb" }}>
        <small>© {year} GAIA</small>
      </div>
    </footer>
  );
}
