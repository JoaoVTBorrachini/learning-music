import './style.css'
interface Props {
  children: React.ReactNode;
}
export function Main({ children }: Props) {
  return <main className='main'>
    {children}
  </main>;

}