# DRL-IT Clone Website - Development Plan

## Design Guidelines

### Design References
- **DRL-IT Website**: Professional tech services company with gradient hero, clean sections
- **Style**: Modern Professional + Dark/Light Mode + Tech-focused

### Color Palette
- Primary: #3B82F6 (Blue - main accent)
- Secondary: #8B5CF6 (Purple - gradient accent)
- Background Dark: #0F172A (Slate 900)
- Background Light: #F8FAFC (Slate 50)
- Card Dark: #1E293B (Slate 800)
- Card Light: #FFFFFF (White)
- Text Primary: #F8FAFC (Light) / #0F172A (Dark)
- Text Secondary: #94A3B8 (Slate 400)
- Success: #10B981 (Green)
- Warning: #F59E0B (Amber)
- Error: #EF4444 (Red)

### Typography
- Heading1: Inter font-weight 700 (48px)
- Heading2: Inter font-weight 600 (36px)
- Heading3: Inter font-weight 600 (24px)
- Body: Inter font-weight 400 (16px)
- Small: Inter font-weight 400 (14px)

### Key Component Styles
- **Buttons**: Blue gradient background, white text, rounded-lg, hover: brighten
- **Cards**: Dark slate background with border, rounded-xl, hover: lift effect
- **Forms**: Dark inputs with border, focus: blue ring

### Images (CDN URLs)
1. hero-banner-tech-office.jpg: https://mgx-backend-cdn.metadl.com/generate/images/376327/2026-02-07/663f574a-0b5a-44b5-bc1c-8ed6365133c1.png
2. service-web-development.jpg: https://mgx-backend-cdn.metadl.com/generate/images/376327/2026-02-07/bf76f1f1-e7d8-4266-8444-ebc788b4953c.png
3. service-mobile-app.jpg: https://mgx-backend-cdn.metadl.com/generate/images/376327/2026-02-07/05547ee1-0f09-418f-95a4-7764ecbc4ad6.png
4. service-ecommerce.jpg: https://mgx-backend-cdn.metadl.com/generate/images/376327/2026-02-07/32f93dbc-cb21-4019-ba87-01218b750734.png

---

## Development Tasks

### Frontend Files to Create/Modify:
1. **src/pages/Index.tsx** - Main landing page with all sections
2. **src/pages/admin/Login.tsx** - Admin login page
3. **src/pages/admin/Dashboard.tsx** - Admin dashboard with stats
4. **src/pages/admin/PaymentSettings.tsx** - Payment API key management
5. **src/components/Header.tsx** - Navigation header
6. **src/components/Footer.tsx** - Footer component
7. **src/App.tsx** - Update routes
8. **index.html** - Update title

### Backend Files to Create:
1. **backend/routers/xendit.py** - Xendit payment integration routes