import Link from "next/link"
import LiButton from "./LiButton"

const Header = () => {
    return (
        <div className="w-full">
            <ul className="flex justify-center">
                <Link className='mr-12' href='/'><LiButton>Home</LiButton></Link>
                <Link className='mr-12' href='/projects'><LiButton>Projects</LiButton></Link>
                <Link className='mr-12' href='/resume'><LiButton>Resume</LiButton></Link>
            </ul>
        </div>
    )
}

export default Header