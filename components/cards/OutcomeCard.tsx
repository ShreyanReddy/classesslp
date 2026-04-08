'use client'

interface OutcomeCardProps {
  icon: string
  iconColor: string
  primary: string
  secondary: string
  accentColor?: string        // optional top border accent
  size?: 'sm' | 'md' | 'lg'  // optional size variant
  style?: React.CSSProperties // positional override
  className?: string
  animationDelay?: number     // explicit delay to avoid hydration mismatch from Math.random()
}

export default function OutcomeCard({
  icon,
  iconColor,
  primary,
  secondary,
  accentColor = '#E8FF47',
  size = 'md',
  style = {},
  className = '',
  animationDelay = 0,
}: OutcomeCardProps) {

  const sizes = {
    sm: { padding: '10px 14px', maxWidth: 200, fontSize: '11px', primarySize: '12px' },
    md: { padding: '14px 18px', maxWidth: 250, fontSize: '12px', primarySize: '13px' },
    lg: { padding: '18px 22px', maxWidth: 300, fontSize: '13px', primarySize: '15px' },
  }

  const s = sizes[size]

  return (
    <div
      className={`outcome-card ${className}`}
      data-cursor="card"
      style={{
        // Asymmetric glass borders — physically accurate
        background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 100%)',
        backdropFilter: 'blur(40px) saturate(180%) brightness(110%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%) brightness(110%)',
        borderTop: `1px solid ${accentColor}`,      // accent top border
        borderLeft: '1px solid rgba(255,255,255,0.14)',
        borderRight: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        borderRadius: 14,
        padding: s.padding,
        maxWidth: s.maxWidth,
        boxShadow: '0 0 0 0.5px rgba(255,255,255,0.06), 0 20px 60px rgba(7,8,12,0.4), 0 4px 16px rgba(7,8,12,0.25), inset 0 1px 0 rgba(255,255,255,0.14)',
        // Float animation
        animation: 'float 5s ease-in-out infinite',
        animationDelay: `${animationDelay}s`,
        willChange: 'transform',
        cursor: 'none',
        ...style,
      }}
    >
      {/* Icon row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 6,
      }}>
        <span style={{ color: iconColor, fontSize: 14, lineHeight: 1 }}>{icon}</span>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: s.primarySize,
          color: '#F0F0F5',
          lineHeight: 1.3,
        }}>
          {primary}
        </span>
      </div>

      {/* Secondary line */}
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        fontSize: s.fontSize,
        color: 'rgba(240,240,245,0.55)',
        lineHeight: 1.4,
        paddingLeft: 22,
      }}>
        {secondary}
      </p>
    </div>
  )
}
