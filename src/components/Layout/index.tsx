import './style.css'
interface Props {
  children: React.ReactNode;
}
export function Layout({ children }: Props) {
  return <div className='layout'>
    
    {children}
  </div>;

}
