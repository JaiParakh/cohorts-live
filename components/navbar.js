import Link from "next/link";
import { Nav } from "react-bootstrap";

const POSTLINKS = [
  {
    title: "Pre-Rendering",
    slug: "pre-rendering",
  },
  {
    title: "Ssg-ssr",
    slug: "ssg-ssr",
  },
];

export default function Navbar() {
  return (
    <Nav className="dark bg-dark justify-content-end">
      <Nav.Item>
        <Nav.Link>
          <Link href="/">Home</Link>
        </Nav.Link>
      </Nav.Item>
      {POSTLINKS.map(({ title, slug }) => (
        <Nav.Item>
          <Nav.Link>
            {/* <Link href={`/posts/${slug}`}>{title}</Link> */}
            {title}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}
