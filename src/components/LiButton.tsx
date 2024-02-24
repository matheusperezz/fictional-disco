import React, { MouseEventHandler, ReactElement } from "react"

interface LiButtonProps {
    children: string | ReactElement
}

const LiButton = ({ children }: LiButtonProps) => {
    return (
        <li className="relative text-lg font-extrabold py-2 transition-transform duration-300 ease-out hover:translate-y-[-5px] cursor-pointer">
        {children}
        </li>
    )
}

export default LiButton