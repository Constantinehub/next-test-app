import Link from 'next/link';

interface Props {
  direction: string;
  content: React.ReactNode;
}

function NavLink(props: Props) {
  const { direction, content } = props;

  return <Link href={direction}>{content}</Link>;
}

export default NavLink;
