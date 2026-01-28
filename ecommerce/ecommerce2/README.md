# MedWell - Premium Online Pharmacy

A best-in-class, premium, trust-focused online pharmacy website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Clean Clinical Luxury Design** - Modern healthcare aesthetic with high trust signals
- **Search-First Experience** - Command-palette style search with autosuggest
- **Full E-commerce Flow** - Browse, cart, checkout, order tracking
- **Prescription Management** - Upload, verification workflow, prescription tracking
- **Mobile-First Responsive** - App-like mobile experience with bottom navigation
- **Accessibility** - High contrast, readable fonts, clear tap targets

## Pages

- **Home** - Hero with search, categories, deals, chronic care programs
- **Category/Listing** - Advanced filters, grid/list views, sorting
- **Product Detail (PDP)** - Clinical layout with tabs, variants, substitutes
- **Upload Prescription** - Multi-step upload flow with drag-drop
- **Cart** - Rx/OTC grouping, cold chain badges, coupon support
- **Checkout** - One-page checkout with address and payment
- **Account** - Orders, prescriptions, addresses, settings

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State**: React Context (Cart)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── category/[slug]/   # Category listing
│   ├── product/[id]/      # Product detail
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout flow
│   ├── upload-prescription/  # Prescription upload
│   ├── account/           # User account
│   └── categories/        # All categories
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Tabs.tsx
│   │   ├── Modal.tsx
│   │   ├── BottomSheet.tsx
│   │   ├── Select.tsx
│   │   ├── Skeleton.tsx
│   │   └── Toast.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── BottomNav.tsx
│   │   └── SearchModal.tsx
│   ├── products/          # Product components
│   │   ├── ProductCard.tsx
│   │   ├── QuickViewModal.tsx
│   │   └── ProductFilter.tsx
│   └── ClientLayout.tsx   # Client-side layout wrapper
├── context/
│   └── CartContext.tsx    # Cart state management
├── data/
│   └── medicines.ts       # Mock medicine data (22 products)
├── lib/
│   └── utils.ts           # Utility functions
└── types/
    └── index.ts           # TypeScript types
```

## Design Tokens

### Colors
- **Navy** (Primary): Trust, professionalism
- **Teal** (Accent): Healthcare, action
- **Clinical Neutrals**: Clean, medical feel

### Typography
- **Font Family**: Inter (body), Plus Jakarta Sans (display)
- **Large line-height** for product details
- **High contrast** for accessibility

### Shadows
- `shadow-soft`: Subtle elevation
- `shadow-card`: Card hover states
- `shadow-elevated`: Modals, dropdowns

## Components

### UI Components
- Button (primary, secondary, outline, ghost, danger)
- Input with icons and validation
- Badge (rx, otc, discount, delivery, coldchain)
- Card with hover effects
- Tabs with animated underline
- Modal and BottomSheet for dialogs
- Skeleton loaders
- Toast notifications

### Features
- Command-palette search
- Product cards with quick-add
- Filter drawer (mobile bottom sheet)
- Prescription upload with drag-drop
- Cart with Rx/OTC grouping
- Checkout with saved addresses

## Mobile Experience

- **Bottom Navigation** - 5 items: Home, Categories, Search (prominent), Cart, Account
- **Safe area padding** - iOS notch/home bar support
- **Touch-friendly** - Large tap targets (44px minimum)
- **Smooth transitions** - 150-250ms, ease-out

## Compliance Notes

- Disclaimers included on all medical content
- "Consult a doctor" warnings
- Prescription required badges
- No health cure promises
- Licensed pharmacy indicators

## Mock Data

22 realistic medicine products with:
- Name, generic name, salt composition
- Strength, form, pack size
- Price, MRP, discount
- Rx/OTC status, manufacturer
- Uses, side effects, precautions
- Dosage, storage, expiry info
- Rating, reviews
- Cold chain flag
- Variants and substitutes

## License

MIT
