import Link from "next/link"
import LiButton from "./LiButton"

const Header = () => {
    return (
        <div className="flex justify-between items-center w-full">
            <ul className="flex justify-center">
                <Link className='mr-12' href='/'><LiButton>HOME</LiButton></Link>
                <Link className='mr-12' href='/projects'><LiButton>PROJECTS</LiButton></Link>
                <Link className='mr-12' href='/resume'><LiButton>RESUME</LiButton></Link>
            </ul>
        </div>
    )
}

export default Header