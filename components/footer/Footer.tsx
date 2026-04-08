export default function Footer() {
  const links: Record<string, string[]> = {
    Platform: ['Predictive Intelligence', 'Student Outcomes', 'Teacher Leverage', 'Admin Intelligence', 'Parent Portal', 'The Guarantee'],
    Schools: ['For K-12 Schools', 'Elite Schools India', 'Elite Schools USA', 'Book a Demo', 'Partnership Enquiry'],
    Company: ['Our Vision', 'About Classess', 'Dot eVentures', 'Careers', 'Press'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Data Protection', 'FERPA Compliance', 'Student Privacy Pledge'],
  }

  return (
    <footer style={{
      background: '#07080C',
      borderTop: '1px solid #E8FF47',
      padding: '60px 80px 40px',
      fontFamily: "'DM Sans', sans-serif",
    }}>

      {/* Top row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr repeat(4, 1fr)',
        gap: 48,
        marginBottom: 60,
      }}>

        {/* Brand column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: '#E8FF47', display: 'inline-block' }} />
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.4rem',
              letterSpacing: '0.06em',
              color: '#F0F0F5',
            }}>
              CLASSESS
            </span>
          </div>
          <p style={{
            fontSize: '0.78rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#6B7280',
            lineHeight: 1.6,
            marginBottom: 24,
          }}>
            Extraordinary Schools.<br />
            Extraordinary Outcomes.<br />
            Guaranteed.
          </p>
          <p style={{ fontSize: '0.75rem', color: '#3D3D3D' }}>
            Prediction. Prevention. Execution.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([heading, items]) => (
          <div key={heading}>
            <h4 style={{
              fontSize: '0.65rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E8FF47',
              marginBottom: 20,
              fontWeight: 500,
            }}>
              {heading}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {items.map(item => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontSize: '0.8rem',
                      color: '#6B7280',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      cursor: 'none',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#F0F0F5')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div style={{
        borderTop: '1px solid rgba(240,240,245,0.06)',
        paddingTop: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <p style={{ fontSize: '0.72rem', color: '#3D3D3D' }}>
          © 2025 Classess · Dot eVentures Private Limited · Hyderabad, India
        </p>
        <p style={{
          fontSize: '0.65rem',
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          color: '#3D3D3D',
        }}>
          The World&apos;s Most Advanced School Intelligence Platform
        </p>
      </div>

    </footer>
  )
}
