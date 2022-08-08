import * as React from 'react'

type IconProps = React.ComponentProps<'svg'>

export function SearchIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.333 12.667A5.333 5.333 0 107.333 2a5.333 5.333 0 000 10.667zM14 14l-2.9-2.9"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HeartIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4.004c-.907 1.411-.686 3.31.5 4.496l4.793 4.793a1 1 0 001.414 0L13.5 8.5c1.186-1.186 1.407-3.085.5-4.496-1.38-2.147-4.584-2.123-6 0-1.416-2.123-4.62-2.147-6 0z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HeartFilledIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4.004c-.907 1.411-.686 3.31.5 4.496l4.793 4.793a1 1 0 001.414 0L13.5 8.5c1.186-1.186 1.407-3.085.5-4.496-1.38-2.147-4.584-2.123-6 0-1.416-2.123-4.62-2.147-6 0z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MessageIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 2.513a1 1 0 011 1V11.5a1 1 0 01-1 1H5.37a1 1 0 00-.65.24l-1.57 1.345a1 1 0 01-1.65-.76V3.514a1 1 0 011-1h11z"
        stroke="currentColor"
      />
    </svg>
  )
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.5 4.5L6.35355 7.64645C6.15829 7.84171 6.15829 8.15829 6.35355 8.35355L9.5 11.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.5 11.5l3.146-3.146a.5.5 0 000-.708L6.5 4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function EditIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.333 2A1.886 1.886 0 0114 4.667l-9 9-3.667 1 1-3.667 9-9z"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TrashIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4h12M5.333 4V2.667a1.333 1.333 0 011.334-1.334h2.666a1.333 1.333 0 011.334 1.334V4m2 0v9.333a1.333 1.333 0 01-1.334 1.334H4.667a1.334 1.334 0 01-1.334-1.334V4h9.334z"
        stroke="currentColor"
        strokeWidth={1.41667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BoldIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 2.667h5.333a2.667 2.667 0 110 5.333H4V2.667z"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 8h6a2.667 2.667 0 010 5.333H4V8z"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ItalicIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.667 2.667h-6M9.333 13.333h-6M10 2.667L6 13.333"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ListIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.333 4H14M5.333 8H14M5.333 12H14M2 4h.007M2 8h.007M2 12h.007"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LinkIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.667 8.667a3.333 3.333 0 005.026.36l2-2A3.334 3.334 0 008.98 2.313l-1.147 1.14"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.333 7.333a3.334 3.334 0 00-5.026-.36l-2 2a3.333 3.333 0 004.713 4.714l1.14-1.14"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function XIcon(props: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 7l-11 11M6.5 7l11 11"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function EyeIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.627 7.449c.23.331.23.77 0 1.102C13.529 10.131 11.554 12.5 8 12.5s-5.53-2.368-6.627-3.949a.966.966 0 010-1.102C2.471 5.869 4.446 3.5 8 3.5s5.53 2.369 6.627 3.949z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M10 8a2 2 0 11-4 0 2 2 0 014 0z" fill="currentColor" />
    </svg>
  )
}

export function EyeClosedIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.447 4.435C3.006 5.27 2.032 6.5 1.373 7.448a.967.967 0 000 1.103C2.471 10.131 4.446 12.5 8 12.5c1.429 0 2.602-.383 3.566-.943m1.65-1.286c.09-.09.178-.18.262-.271.463-.498.84-1.004 1.148-1.448a.967.967 0 00.001-1.103C13.529 5.869 11.554 3.5 8 3.5c-.511 0-.99.049-1.438.138"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 8a2 2 0 003.41 1.418L6.586 6.586A1.994 1.994 0 006 8z"
        fill="currentColor"
      />
      <path
        d="M13.5 13.5l-11-11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DotsIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 8a1 1 0 11-2 0 1 1 0 012 0zM9 8a1 1 0 11-2 0 1 1 0 012 0zM14 8a1 1 0 11-2 0 1 1 0 012 0z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MarkdownIcon(props: IconProps) {
  return (
    <svg
      width={26}
      height={16}
      viewBox="0 0 26 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_33_726)">
        <path
          d="M24.125.625H1.875c-.69 0-1.25.56-1.25 1.25v12.25c0 .69.56 1.25 1.25 1.25h22.25c.69 0 1.25-.56 1.25-1.25V1.875c0-.69-.56-1.25-1.25-1.25z"
          stroke="currentColor"
          strokeWidth={1.29808}
        />
        <path
          d="M3.75 12.25v-8.5h2.5l2.5 3.125 2.5-3.125h2.5v8.5h-2.5V7.375L8.75 10.5l-2.5-3.125v4.875h-2.5zm15.625 0l-3.75-4.125h2.5V3.75h2.5v4.375h2.5l-3.75 4.125z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_33_726">
          <path fill="#fff" d="M0 0H26V16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo(props: IconProps) {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 337 38"
      width="231"
      height="26"
    >
      <defs>
        <image
          width="337"
          height="38"
          id="img1"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVEAAAAmCAMAAABK+Fi9AAAAAXNSR0IB2cksfwAAANhQTFRFAAAA7+/v/Elj+k9q+VBr/0Vd/0Vd/Elj+k5p+VBr/0Ve/Epkzc3Ns7Oz/Udg+0xn+VBr+k5q/kdf+U9r/Udgq6ur+k5q+VBs+01owMDA/Uhh/kZe/Eli/kZf/Uhi+k1o/Udgy8vL/kZf/kdf+0tl/0Ve+U9r4+Pj/Epk+U9q+k5p/Uli+0xm+U9q/Etl+k1o5eXl/kVe/Udh+0tl+0tm+0xnz8/P+E5q/Epk+0xn+0tm/kZf/0Ze+E9q+0tm+k1o/Epl/Udg/Uhh/Udg+k1p+k9q+k1o+k5qsHPI0QAAAEh0Uk5TAADULxT+/9I/Cv68AADwhR1G9BTxADYUeQDi+tn432DuAPb1qPwKAMwUVdqSCrRnAPvqrKaNABTKi5z5+wqhVbny5fNcJVwv5yqQswAAAWVJREFUeJztmtdSAkEQRVdgGgOiYBZzTqgo5oDZ//8jN0zPLqtPzsOtnurzNPft1Clgt6aIIkVRFEVRFDQjlSpaISxqhkiTelE3o4U1Nk5EEw2YjXgmm1NxwXxPx5/QhBZOSTjttF+d54wNSrNIKcnM2YDz2VzgoLSI9RKMDWiW0uWCLoO1BNOxCVeSscpB19BaglnniK2o0ebzBtpKNPxFN5tbHHQb7SSbHe646w57aCfZ7FMJo0E9OSgVraGFxHM4HPQI7RMAx8WgJ2ibEOgWgp6iZcLgLC+KVgmD815e9AItEwTN4u/oJdomACrDz3q9GPWlX37D1/dRP67KQalzjXYSzc2voES3aCnRmD+KUh9tJRh3I0p394WkaC3BuIaVKHpw4xGtJRj3NIrPVR5G///wfzjiUzKe7dD7UQ9sw0G2skuoF6iRdF7Thm883+mj+4n0CYBe/Ppk0BJh8UX0jXbw4AfK4xVa5K5AIgAAAABJRU5ErkJggg=="
        />
        <image
          width="337"
          height="38"
          id="img2"
          href="data:image/png;base64,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"
        />
        <image
          width="337"
          height="38"
          id="img3"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVEAAAAmCAMAAABK+Fi9AAAAAXNSR0IB2cksfwAAArtQTFRF/0Vd/0Vd/0Vd/0VdAAAA/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0Vd/0VddsMTYgAAAOl0Uk5TBiMkCwBh/v+FbZLCJhD8v/00CPuoASlplK64sZp1PAQZVoi2taSAUA1IfaC0t6mLXh8JRapgG0mClWLkchg6X9nrfzP4opb1yT9r6hMDZPmlF+Y7zquQBfO+IR7sTRLvSixn2JgKADnfxiW6INT00rI+8trTzPY3x/HP3opXR1F5nTDupksP98BMXZ7oamXIVZvW4tFUcY8rEencDC7BWQdOsA7jJxZ3XFLVk6OzAlNP+ns4b2gUMrmc53waL91Cza9Efp82oS3tbD2XjkCJgZGncBVDeKzXKIfEHNvFjbzLhIwdY+AqQVqCcuCqAAAGu0lEQVR4nO1a+X9MVxQfyTUPk0zSxEhE28mIJUFIIxLbCK12CBFFLVloQocSY4sQVUvREFESO2mRxtoaooqiVEtLW7W2qpsuuvwZfffc+967bxkf8t5MjE++v8w953vvm3O+c/c3JlOzkJCQUNQEo2BqbuY4rkVjh/EEwdSSF5Rr1dhhPEFoUtRoNClqNJoUNRpBoqglrLEjeGgEhaLhVo4LGkkfT0UjIp9irKhoPsTWjRbMI0JS1NYmJrZtXLunn3nWrlUx3tG+dUKHjp06J2qxoUldunZL7t4j5Tk1l9qzRVpyu9he6dS2Z/RundyuT994XzH168+HJJnOSA4w4OGzakwIitozB3ICBj2vOkO9EGEV2MEvqgZg+ksusfGQoTYZZ88aRpnojsN5O3vEIGrnjHxZMyRSP0Iww6mg3CjdyQYEVNHRYzgWwzJlsqS/ImNzxo5jWVvv8SxrnpDLkHkTGCq/AE2MYOxJr2qFRMlCYoWLP2WRwan7CUTRyS5ODvOU18Qq7qnTFCz3+nTpCc4ZSnZYkvh7FM+UMZ4shZ2pERLlrMSKFurO8pcEBoMoqoHZQj90z5mrZue1ER7gLFGzLofw9Pk+ni6gdIE6JA/lFmKjTKi5yN9KGAVGUfMbi99csnTZEDpvLacd7a1RxF6xslfGqpgEOsJnvk3b01FdvrrlmqSKtZXEmktXkXVgRS58J8PR1SV+kXV9UcaGqlIoV2erQuos1BsgzKk8NgZID/2QFN3kSAWPfUECEXgzmNkLiZ5bnG5s2oq3DgZHFUjhbm8GjZZvI/pvL9oB7M4asGARys/Emwf3u+8JPXjXbkyGkQfvUcckLEWRaIUQXL6/dTAOoqK170vOTiBT9URcbg5sHTNxFoBO1qG4vBd6nidFYveRWWA/Lh+Aip0pM5x24IPUjj+ErdnqmD4QdCwXC1HGZexvCIpGmBinrZOoyjjoczvy2DZDoRPV8j3P/SFUPMCy6dXYVYp3SlW4dNgrMA6oPEGseQQEr1EHxSlgDSJBBUWn5cq9sMcp4Reno7hQf1De6Bg4pyKUC110rJz9CKaF43zJggsF0lOh9seifQIG9Ul1UKfkgprD9WYZSFBFjyncA3J4Zw6/oH+C2W675Wzqaew9g1AFDMmzcta7EtrwpU248KnEnMP2HNG0w67svDqocLmiS3RlGGgQRc3FCrf3M9LPbDD3ZTkVgMF+GKFY/HlB+czReBreyM/CsPncJhGTsS3tl7yg8OcaUQ1hBf3CoFQDBKJoiVvpb4XdF5ETcnKNVwDG9UA6PHcp28ISX3pJh6JRjKAXDckzcCCKfqnyb8HuDugrzjcuIzRGcyL0whXBKh2K0kUMho8RWQYSpis47D4qfwx2z0AnH6DoeLVkFLOw+6AeRUulr9lpQJaBhCkTR12r8sNy3hbtfYCilXS++1rZdtw0vYr2Y7/nG0MSDRhM53HQ+SalPw27v0WhcPMz6bQW+BUJ7qS6KNvmuXQqapH/dEFyMUphyivHQV9VuBPrsHcpQnDV8V28FkIRuobZEpuiMRyVdCh6XTEYgmw/aoe0b3jl7pvQNW8hdAYX5jl9tL4Nx9U5cmfoIX2KLlPNL56GZtcYMKHvccw5fWXesHzs/IHfU4WBZlU+WtfsxOydE6zP24XTpWi4Uk8eyXpSDDBMaB9s4ivZPdBZWHHK+f0PcsNtXfRxtsmGGB4OuHsiJ64b7JkqxaNPUSungetG5et/8EsSuRaZu0acDgsXgScNtv0/1oNxTBRtYndwVG7HRiJ0Um6GOC1kxwiKNFBR8UaU23+XkdTwxP0GXtEoejHx01E8mbpPjiQaltHjegvCzusP130/9yZ3llZ6ATLaBabnejNsJY6QbvQbqKjY3oKQ9PLA5T8FjAbeNhX/QuO+/GvC6n5mUvb0pDVqblA2Z1HcqWr62sf6m7CU3aT3w5ED7yX/7mJ6lU5FsYZhgmENmv8/EEVRYR2nRFmFWGV4B7OSNceKN5bePzQnvgYrKnwXfMGfrBEkIFv7v9Yr5Ki7zdSJWlsvZ8v7M2+H3M3L5Ky19pz+Pkpv8Mgl1EiDk/Yr6GEp9D77BnnF3VuyStnnVzNsfdtC+TNCLrKKrz+SvUmHouTVSbVg7jAXROWhYIJ4/Iy/ElcOyUTPv9ZGeQpCqZu7k1ei5r+nXN2tZO0Ltt4hcuZfSOEXsLsWiyXuH4R68J/JzI+zlbdPSX8kcS/m7Xu5ioeVWvE7u+AFe6C3X6poef9fX0c+23THunV70n2w6FZGUdZ/29Tvih8dBUH0RzwN/A+0/lG8iGtdUAAAAABJRU5ErkJggg=="
        />
      </defs>
      <style></style>
      <use href="#img1" x="0" y="0" />
      <use href="#img2" x="0" y="0" />
      <use href="#img3" x="0" y="0" />
    </svg>
  )
}

export function GithubLogo(props: IconProps) {
  return (
    <svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 0C3.806 0 0 3.668 0 8.192c0 3.62 2.436 6.69 5.813 7.774.425.075.58-.178.58-.395 0-.195-.007-.84-.01-1.525-2.366.496-2.865-.966-2.865-.966-.386-.947-.943-1.199-.943-1.199-.772-.508.058-.498.058-.498.853.058 1.303.844 1.303.844.758 1.253 1.988.89 2.473.681.077-.53.297-.89.54-1.095-1.888-.207-3.873-.91-3.873-4.049 0-.894.332-1.625.876-2.199-.088-.206-.38-1.04.082-2.168 0 0 .714-.22 2.339.84A8.435 8.435 0 018.5 3.961c.722.004 1.45.095 2.13.276 1.622-1.06 2.335-.84 2.335-.84.462 1.129.171 1.962.083 2.168.545.574.875 1.305.875 2.2 0 3.146-1.989 3.838-3.882 4.041.305.255.577.753.577 1.517 0 1.096-.01 1.979-.01 2.248 0 .218.153.474.584.393C14.568 14.88 17 11.81 17 8.192 17 3.668 13.194 0 8.5 0zM3.184 11.67c-.02.04-.086.053-.146.025-.062-.027-.096-.082-.076-.123.018-.042.084-.054.146-.026.062.027.097.083.076.124zm.418.36c-.04.036-.12.019-.174-.038-.055-.058-.066-.134-.025-.17.042-.037.119-.02.175.037.055.058.066.134.024.17zm.287.46c-.053.034-.138.002-.19-.071-.052-.073-.052-.16 0-.196.054-.035.137-.003.19.07.053.073.053.16 0 .196zm.485.532c-.047.05-.146.036-.219-.031-.074-.066-.095-.16-.048-.21.047-.05.147-.035.22.032.074.066.096.16.047.21zm.627.18c-.021.064-.117.093-.213.066-.096-.028-.159-.103-.14-.168.02-.065.117-.095.213-.066.096.028.16.103.14.168zm.713.076c.002.068-.08.124-.18.125-.102.002-.184-.052-.185-.119 0-.068.08-.124.181-.125.101-.002.184.052.184.12zm.701-.026c.012.066-.058.134-.159.152-.098.017-.19-.023-.202-.089-.012-.067.06-.135.158-.152.1-.017.19.022.203.09z"
        fill="currentColor"
      />
    </svg>
  )
}

export function SpinnerIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        className="opacity-25"
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={4}
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}
