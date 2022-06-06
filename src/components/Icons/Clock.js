const ClockSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    style={{
      enableBackground: 'new 0 0 16 16'
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
    <path d="M7 7H4v2h4a1 1 0 0 0 1-1V3H7v4z" />
  </svg>
)

export default ClockSVG
