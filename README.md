# NWESTCO Client Portal

Secure client portal for NWESTCO WordPress project deliverables.

## Features

- **Password Protection** - Simple password gate (default: `nwestco2025`)
- **Email Collection** - Alternative authentication method that collects client emails
- **Tandem Theory Branding** - Professional branded interface
- **File Downloads** - Easy access to theme, content, and documentation
- **Quick Start Guide** - Embedded installation instructions

## Deployment to Vercel

### Step 1: Push to GitHub
This repository should be at: `tandemtheory/tandem-nwestco-portal`

### Step 2: Deploy on Vercel
1. Go to [Vercel Dashboard](https://vercel.com)
2. Click "New Project"
3. Import from GitHub: `tandemtheory/tandem-nwestco-portal`
4. Framework Preset: **Next.js**
5. Click **Deploy**

### Step 3: Configure Custom Domain
1. In Vercel project settings, go to **Domains**
2. Add domain: `nwestco.tandemtheory.com`
3. Add the DNS records shown by Vercel to your domain provider:
   - Type: **CNAME**
   - Name: `nwestco`
   - Value: `cname.vercel-dns.com`

### Step 4: Environment Variables (Optional)
In Vercel project settings → Environment Variables:
- `PORTAL_PASSWORD` = your-secure-password

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Changing the Password

Edit `.env.local`:
```
PORTAL_PASSWORD=your-new-password
```

Or change it directly in `app/page.tsx` line 17:
```typescript
if (password === 'your-new-password') {
```

## Adding Files

Place downloadable files in `/public/downloads/`:
- nwestco-theme.zip
- nwestco-content.xml
- FINAL-DELIVERY-PACKAGE.md
- NWESTCO-THEME-PACKAGE-SUMMARY.md

## Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
tandem: {
  blue: '#0A2540',    // Dark blue
  orange: '#FF6B35',  // Orange accent
  gray: '#F7F7F7',    // Light gray background
}
```

### Files List
Edit `app/page.tsx` to add/remove document cards.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Hosting

## Support

Built by Tandem Theory
Contact: hello@tandemtheory.com
