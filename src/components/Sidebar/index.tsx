import './style.css'
import { DotOutline } from "@phosphor-icons/react";
export function Sidebar() {
  return <div className='sidebar'>

    <button className='sidebar-dot'><div className='filled-dot'/></button>
    <button className='sidebar-dot'><DotOutline/></button>
    <button className='sidebar-dot'><DotOutline/></button>
    <button className='sidebar-dot'><DotOutline/></button>

  </div>;

}