# Joshio Rojas Moraga - Rechtsanwalt Website

Professional legal website for Rechtsanwalt Joshio Rojas Moraga, Hamburg.

## Features

- ✅ Modern, maritime blue design
- ✅ Responsive layout (mobile, tablet, desktop)
- ✅ DSGVO-compliant contact form via FormSubmit.co
- ✅ Complete Impressum and Datenschutzerklärung
- ✅ 7 practice areas (Tätigkeitsschwerpunkte)
- ✅ Static site generation (SSG) for optimal performance
- ✅ Smooth animations with BlurFade

## Tech Stack

- **Next.js 14.2.4** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - UI components (Avatar, Button, Input, Textarea, Label)
- **FormSubmit.co** - DSGVO-compliant form submission
- **Vercel** - Hosting and deployment

## Setup

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

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Framework Preset: **Next.js** (auto-detected)
5. Click **Deploy**

Your website will be live at `https://joshiorojas-website.vercel.app`

### Custom Domain

1. In Vercel Dashboard → Settings → Domains
2. Add your domain (e.g., `jrmlegal.de`)
3. Update DNS records at your domain provider

## Important Files

- `src/app/page.tsx` - Main homepage with all sections
- `src/app/datenschutz/page.tsx` - Privacy policy page
- `src/components/contact-form.tsx` - Contact form component
- `src/data/resume.tsx` - Contact information and data
- `src/app/globals.css` - Maritime blue color theme

## Contact Form

The contact form uses **FormSubmit.co** which:
- ✅ Is DSGVO compliant
- ✅ Does NOT store user data
- ✅ Forwards emails directly to `jrm@jrmlegal.de`
- ✅ No backend or API required

## Before Go-Live Checklist

- [ ] Replace `public/avatar.jpg` with actual profile photo
- [ ] Test contact form (sends to jrm@jrmlegal.de)
- [ ] Verify phone number: +49 177 7983780
- [ ] Verify email: jrm@jrmlegal.de
- [ ] Verify address: Farnweg 3b, 22459 Hamburg
- [ ] Test all links and navigation
- [ ] Test responsive design on mobile
- [ ] Review Impressum and Datenschutzerklärung

## Contact Information

**Joshio Rojas Moraga**
Rechtsanwalt
Farnweg 3b
22459 Hamburg

📧 jrm@jrmlegal.de
📞 +49 177 7983780

---

Built with Next.js 14 and Tailwind CSS
