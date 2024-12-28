import { Button } from '../ui/Button';
import logo from '../logos/Untitled design.svg'
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="" className='h-12 w-12'/>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button size="sm" onClick={() => navigate('/dashboard')}>Sign In</Button>
          </div>
        </div>
      </div>
    </header>
  );
}