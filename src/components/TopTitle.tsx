import { ReactElement } from "react";

interface TopTitleProps {
    title: ReactElement | string
}

const TopTitle = ({ title }: TopTitleProps) => {
    return (
        <div className="p-2 text-4xl font-bold w-full text-center">
            {title}
        </div>
    )
}

export default TopTitle