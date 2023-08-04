import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
      <div className="flex h-14 items-center text-[#F7BE38]">
          <div className="font-black text-xl ml-5" onClick={() => navigate('/')}>MovieZ</div>
      </div>
    )
}

export default Navbar