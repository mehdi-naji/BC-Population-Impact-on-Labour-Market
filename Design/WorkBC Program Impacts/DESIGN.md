---
name: Executive Dashboard Design System
colors:
  surface: '#f7fafc'
  surface-dim: '#d7dadc'
  surface-bright: '#f7fafc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f6'
  surface-container: '#ebeef0'
  surface-container-high: '#e5e9eb'
  surface-container-highest: '#e0e3e5'
  on-surface: '#181c1e'
  on-surface-variant: '#43474f'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f3'
  outline: '#737780'
  outline-variant: '#c3c6d1'
  surface-tint: '#3a5f94'
  primary: '#001e40'
  on-primary: '#ffffff'
  primary-container: '#003366'
  on-primary-container: '#799dd6'
  inverse-primary: '#a7c8ff'
  secondary: '#555f71'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f6'
  on-secondary-container: '#596376'
  tertiary: '#001f3c'
  on-tertiary: '#ffffff'
  tertiary-container: '#003460'
  on-tertiary-container: '#649ee5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#1f477b'
  secondary-fixed: '#d9e3f9'
  secondary-fixed-dim: '#bdc7dc'
  on-secondary-fixed: '#121c2c'
  on-secondary-fixed-variant: '#3d4759'
  tertiary-fixed: '#d3e4ff'
  tertiary-fixed-dim: '#a2c9ff'
  on-tertiary-fixed: '#001c38'
  on-tertiary-fixed-variant: '#004881'
  background: '#f7fafc'
  on-background: '#181c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Public Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h1-executive:
    fontFamily: Public Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  h2-section:
    fontFamily: Public Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-main:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  data-point:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: -0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  takeaway-text:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  gutter: 24px
  margin-page: 40px
---

## Brand & Style

The visual identity of this design system is rooted in **Corporate Minimalism**, tailored specifically for high-level decision-makers. The brand personality is authoritative and strategic, designed to instill confidence in labor market data and provincial economic trends. 

The aesthetic prioritizes information density without clutter, utilizing a rigorous grid and generous negative space to reduce cognitive load. The emotional response is one of clarity and insight—moving beyond raw data into actionable intelligence. The interface stays out of the way, acting as a sophisticated lens through which executive users can observe and analyze WorkBC’s key performance metrics.

## Colors

The color palette is anchored by a sophisticated "Oxford Blue" to provide an institutional and trustworthy foundation. 

- **Primary Blue (#003366):** Used for primary actions, active navigation states, and key branding elements.
- **Charcoal & Slate (#2D3748):** Reserved for text hierarchies and iconography to ensure high legibility and contrast.
- **Neutral Tones (#F7FAFC):** Used for background layering and subtle section grouping, allowing data visualizations to stand out.
- **Semantic Accents:** Natural greens and ambers are used sparingly and with high saturation for status indicators, ensuring they remain professional rather than neon.

## Typography

This design system utilizes **Public Sans** as the primary typeface due to its institutional clarity and excellent readability at various scales. It conveys a sense of official governance and stability.

For data-heavy environments, **Inter** is employed for numeric values and labels. Inter’s tall x-height and tabular num features ensure that multi-digit figures and percentages remain perfectly aligned and legible within KPI cards and tables. A strict typographic hierarchy distinguishes between high-level summaries and granular data annotations.

## Layout & Spacing

The layout utilizes a **12-column fixed-fluid hybrid grid**. The sidebar navigation is fixed at 280px, while the main content area scales to a maximum width of 1600px to maintain line-length readability on ultra-wide executive monitors.

A 4px baseline rhythm governs all vertical spacing. Margins between major modules (KPI cards to Charts) are set to `lg` (32px), while internal component padding follows a `sm` (16px) or `md` (24px) scale. This "breathable" spacing strategy ensures that the authoritative tone is not undermined by visual density.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layering** rather than heavy shadows. 

1.  **Level 0 (Canvas):** The primary background uses a very light neutral grey (#F7FAFC).
2.  **Level 1 (Modules):** KPI cards and chart containers are pure white (#FFFFFF) with a thin, 1px border in a soft slate (#E2E8F0). This creates a "flat-elevated" look that feels modern and precise.
3.  **Level 2 (Interactions):** Dropdowns and modal overlays utilize a soft, ambient shadow (15% opacity, 12px blur) to indicate temporary depth without breaking the minimalist aesthetic.

Glassmorphism is used exclusively for the sidebar navigation to provide a sense of technical sophistication, using a subtle backdrop blur on a deep navy surface.

## Shapes

The shape language is conservative and geometric. A "Soft" rounding approach (4px for standard components, 8px for large containers) strikes a balance between modern UI trends and a serious, institutional feel. Sharp corners are avoided to prevent the UI from feeling aggressive, while overly rounded "pill" shapes are avoided to maintain an executive, non-consumer appearance.

## Components

### KPI Cards
Standardized containers featuring a `label-caps` title, a large `data-point` value, and a small trend indicator (sparkline or percentage delta).

### Chart Containers & Executive Takeaways
All chart modules include a dedicated "Executive Takeaway" area at the bottom or side. This area is styled with a subtle tinted background (Primary Blue at 5% opacity) and uses `takeaway-text` to provide qualitative context to the quantitative data.

### Navigation
- **Sidebar:** A persistent vertical navigation for primary categories (Labor Market, Regional Profiles, Sector Analysis).
- **Top Tabs:** Used within pages to switch between different views of the same data set (e.g., Table View vs. Map View).

### Inputs & Filters
Fields use a 1px border and high-contrast text. Selection states are highlighted using the Primary Blue. Filter chips are used for active parameters to keep the dashboard state visible and editable.

### Buttons
Primary buttons are solid Oxford Blue with white text. Secondary buttons are outlined. All buttons use a fixed height of 40px for a substantial, clickable feel.