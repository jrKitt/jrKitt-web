import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl text-pink-200">กิ๊ตตี้ชั๊ย</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="https://github.com/KTCRSW"><GitHubIcon/></Link>
            </li>
            <li>
                <Link href='https://x.com/ktcrsw'><XIcon/></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
