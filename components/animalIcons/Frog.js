import * as React from "react";

function SvgFrog(props) {
  return (
    <svg viewBox="0 0 166.943 166.943" {...props}>
      <circle cx={83.471} cy={83.472} r={83.471} fill="#9de7f9" />
      <ellipse cx={83.069} cy={91.266} rx={57.264} ry={47.492} fill="#90e846" />
      <path
        d="M140.325 90.999c-.173-26.105-25.737-47.226-57.255-47.226-31.519 0-57.083 21.12-57.256 47.226h114.511z"
        fill="#57aa12"
      />
      <circle cx={56.068} cy={53.544} r={19.952} fill="#90e846" />
      <circle cx={110.071} cy={53.544} r={19.951} fill="#90e846" />
      <ellipse cx={56.245} cy={53.682} rx={4.824} ry={4.933} />
      <ellipse cx={109.81} cy={53.682} rx={4.824} ry={4.933} />
      <g fill="#3a710c">
        <circle cx={60.564} cy={105.122} r={4.534} />
        <circle cx={109.9} cy={105.122} r={4.534} />
      </g>
    </svg>
  );
}

export default SvgFrog;
