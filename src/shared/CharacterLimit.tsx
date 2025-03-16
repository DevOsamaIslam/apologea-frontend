import { FC } from 'react'

const CharacterLimit: FC<{ current: number; max: number }> = ({
  current,
  max,
}) => {
  return `${current} / ${max}`
}

export default CharacterLimit
