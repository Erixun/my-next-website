import Link from "next/link";

/**
 * Link that scrolls an element into view on click.
 * @param id ID of the element to scroll into view.
 * @returns A JSX Link element.
 */
const LinkGoto = ({ id }) => (
  <Link href={`#${id}`} scroll={false}>
    {id}
  </Link>
);

export default LinkGoto;
