import React, { ReactNode } from "react"
import "./GlobalStyles.scss"

interface GlobalStylesProps {
    children: JSX.Element | JSX.Element[]
}

const GlobalStyles = ({ children }: GlobalStylesProps) => {
    return children
}

export default GlobalStyles