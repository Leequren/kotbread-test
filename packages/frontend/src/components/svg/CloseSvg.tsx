import { FC } from 'react'
import { IIconProps } from 'src/types/IconProps'

const CloseSvg: FC<IIconProps> = ({ w, h, color }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.292893 0.292893C0.683418 -0.0976309 1.31658 -0.0976309 1.70711 0.292893L8 6.585L14.2929 0.292893C14.6534 -0.0675905 15.2206 -0.0953204 15.6129 0.209704L15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L9.415 8L15.7071 14.2929C16.0676 14.6534 16.0953 15.2206 15.7903 15.6129L15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L8 9.415L1.70711 15.7071C1.34662 16.0676 0.779392 16.0953 0.387101 15.7903L0.292893 15.7071C-0.0976309 15.3166 -0.0976309 14.6834 0.292893 14.2929L6.585 8L0.292893 1.70711C-0.0675905 1.34662 -0.0953204 0.779392 0.209704 0.387101L0.292893 0.292893Z"
        fill={color}
      />
    </svg>
  )
}

export default CloseSvg