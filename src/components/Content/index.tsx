import './style.css'
interface Props {
  children: React.ReactNode;
}
export function Content({ children }: Props) {
  return <div className="content">{children}</div>;
}
