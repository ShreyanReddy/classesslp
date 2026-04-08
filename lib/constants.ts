export const COLORS = {
  // Background journey — dark to light
  void:      '#07080C',  // opening absolute darkness
  obsidian:  '#10111A',  // primary dark surface
  nebula:    '#1E1B4B',  // deep indigo — PPE section depth
  lunar:     '#F0F0F5',  // cool near-white — arrival surface
  silk:      '#FAFAFA',  // final clean landing

  // The three pops — used sparingly, maximum impact
  signal:    '#E8FF47',  // acid yellow-green — 3 uses only
  plasma:    '#FF6B35',  // burnt coral — Superschool peak + CTA
  aurora:    '#00FFB3',  // electric mint — particles + guarantee

  // Typography
  cream:     '#F0F0F5',  // primary text on dark
  muted:     '#6B7280',  // secondary text
  ink:       '#07080C',  // text on light backgrounds
} as const

export const FONTS = {
  display: "'Bebas Neue', sans-serif",    // monumental headlines
  body:    "'DM Sans', sans-serif",       // precise body copy
  // Editorial New Italic — loaded via @font-face for Superschool moment only
  editorial: "'EditorialNew-Italic', 'Playfair Display', Georgia, serif",
} as const

// Scroll trigger points — as percentage of total scroll height
export const SCROLL = {
  opening:        { start: 0,    end: 0.08  },
  identity:       { start: 0.08, end: 0.18  },
  statement:      { start: 0.18, end: 0.30  },
  philosophy:     { start: 0.30, end: 0.42  },
  prediction:     { start: 0.42, end: 0.52  },
  prevention:     { start: 0.52, end: 0.60  },
  execution:      { start: 0.60, end: 0.68  },
  constellation:  { start: 0.68, end: 0.78  },
  superschool:    { start: 0.78, end: 0.86  },
  guarantee:      { start: 0.86, end: 0.93  },
  arrival:        { start: 0.93, end: 1.00  },
} as const

export const GLASS = {
  // Dark section glass — cold crystal
  dark: {
    background: 'rgba(16, 17, 26, 0.45)',
    border: '1px solid rgba(232, 255, 71, 0.12)',
    borderTop: '1px solid rgba(232, 255, 71, 0.20)',
    backdropFilter: 'blur(40px) saturate(200%) brightness(115%)',
    boxShadow: '0 8px 32px rgba(7,8,12,0.5), 0 2px 8px rgba(7,8,12,0.3), inset 0 1px 0 rgba(232,255,71,0.10)',
  },
  // Card glass — floating outcome cards
  card: {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 100%)',
    borderTop: '1px solid rgba(255,255,255,0.28)',
    borderLeft: '1px solid rgba(255,255,255,0.14)',
    borderRight: '1px solid rgba(255,255,255,0.04)',
    borderBottom: '1px solid rgba(255,255,255,0.04)',
    backdropFilter: 'blur(40px) saturate(180%) brightness(110%)',
    boxShadow: '0 0 0 0.5px rgba(255,255,255,0.06), 0 20px 60px rgba(7,8,12,0.4), 0 4px 16px rgba(7,8,12,0.25), inset 0 1px 0 rgba(255,255,255,0.18)',
  },
} as const
