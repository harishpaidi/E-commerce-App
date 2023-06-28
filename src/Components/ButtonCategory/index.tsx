import { useContext } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { Ctx } from "../../Context"
import { ButtonCategoryProps } from "./types"
import * as React from 'react';


export const ButtonCategory: React.FC<ButtonCategoryProps> = ({
  content,
  dispatch,
  to
  }): JSX.Element => {
  const navigate: NavigateFunction = useNavigate()
  const state = useContext(Ctx)
  const { filterAt, searching } = state
  const handleClick = () => {
    if(to) navigate(to)
    dispatch({ type: "FILTER", payload: content })
  }

  const styles: string = `Button-category ${((filterAt === content && !searching) && !to) && "chosen"}`

  return(
    <button className={styles} onClick={handleClick}>
      {content}
    </button>
  )
}