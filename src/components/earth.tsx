export function Earth() {
  return (
    <div className="earth-scene" aria-hidden="true">
      <div className="earth-halo" />
      <svg
        className="earth"
        viewBox="0 0 760 760"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="orb"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="translate(275 240) rotate(46) scale(650)"
          >
            <stop stopColor="#234985" />
            <stop offset=".45" stopColor="#0E284C" />
            <stop offset=".78" stopColor="#08182E" />
            <stop offset="1" stopColor="#030914" />
          </radialGradient>
          <linearGradient id="rim" x1="102" y1="120" x2="605" y2="693">
            <stop stopColor="#72CEFF" />
            <stop offset=".5" stopColor="#286AB9" />
            <stop offset="1" stopColor="#07152D" />
          </linearGradient>
          <clipPath id="clip">
            <circle cx="380" cy="380" r="298" />
          </clipPath>
        </defs>
        <circle
          cx="380"
          cy="380"
          r="299"
          fill="url(#orb)"
          stroke="url(#rim)"
          strokeWidth="2"
        />
        <g
          clipPath="url(#clip)"
          stroke="#6BB9EF"
          strokeOpacity=".21"
          strokeWidth="1"
        >
          <ellipse cx="380" cy="380" rx="76" ry="298" />
          <ellipse cx="380" cy="380" rx="155" ry="298" />
          <ellipse cx="380" cy="380" rx="232" ry="298" />
          <path d="M82 380h596M100 280h560M100 480h560M155 190h450M155 570h450" />
          <path d="M110 250c175 93 365 95 540 0M110 510c175-93 365-95 540 0" />
        </g>
        <circle
          cx="380"
          cy="380"
          r="298"
          stroke="#8DDBFF"
          strokeOpacity=".24"
        />
        <path
          d="M85 426c142-87 296-83 425-152 73-39 126-101 174-157"
          stroke="#8BD5FF"
          strokeOpacity=".42"
          strokeDasharray="3 7"
        />
        <circle cx="517" cy="272" r="5" fill="#A4E4FF" />
        <circle cx="517" cy="272" r="16" stroke="#70C9FF" strokeOpacity=".45" />
      </svg>
      <span className="earth-label label-one">37°46′ N / 122°25′ W</span>
      <span className="earth-label label-two">EARTH / A SHARED SYSTEM</span>
    </div>
  );
}
