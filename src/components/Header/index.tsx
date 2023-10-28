import './style.css'
import { MusicNote } from '@phosphor-icons/react/dist/ssr/MusicNote';
export function Header() {
  return (
    <header className='header'>
      <a href="" className='logo'><MusicNote className='app-logo'/></a> 
      <button className='button-contact'>Contact us</button>
    </header>
  );
}
