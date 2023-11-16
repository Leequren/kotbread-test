import { FC } from 'react'
import { IIconProps } from 'src/types/IconProps'

const StarSvg: FC<IIconProps> = ({ w, h, color }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 12C18 12 12 6 12 0C12 6 6 12 0 12C5.99369 12 12.0002 16.4905 12 23.9763C12.0126 16.4905 18.0063 12 24 12Z"
        fill={color}
      />
    </svg>
  )
}

export default StarSvg
