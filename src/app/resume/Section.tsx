import React, { ReactElement } from "react";

interface SectionProps {
    title: string
    children: ReactElement
}

const Section = ({ title, children }: SectionProps) => {
    return (
        <section className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="h-1 w-full bg-gray-500 mb-4"></div>
            { children }
        </section>
    )
}

export default Section