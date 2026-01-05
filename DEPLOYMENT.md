# 🚀 Deployment Instructions

## ✅ Step 1: Code on GitHub (DONE!)

Your code is now live at:
**https://github.com/federicodeponte/joshiorojas-website**

---

## 📋 Step 2: Deploy to Vercel

### Option A: Automatic Import (Recommended - 2 Minutes)

1. Open: **https://vercel.com/new**

2. Click **"Import Git Repository"**

3. Select: **federicodeponte/joshiorojas-website**

4. Vercel will automatically detect:
   - Framework: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

5. Click **"Deploy"**

6. Wait 2-3 minutes ⏱️

7. **Done!** Your website will be live at:
   - `https://joshiorojas-website.vercel.app`
   - Or: `https://joshiorojas-website-[username].vercel.app`

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## 🌐 Step 3: Add Custom Domain (Optional)

1. In Vercel Dashboard → Select Project → Settings → **Domains**

2. Add your domain (e.g., `jrmlegal.de` or `www.jrmlegal.de`)

3. Update DNS at your domain provider:
   - **A Record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com`

4. Wait 5-10 minutes for DNS propagation

5. **Done!** Your website is now live at your custom domain

---

## ✅ Pre-Launch Checklist

Before making the website public:

- [ ] Add profile photo to `/public/avatar.jpg`
- [ ] Test contact form (sends to jrm@jrmlegal.de)
- [ ] Verify phone number: +49 177 7983780
- [ ] Verify email: jrm@jrmlegal.de
- [ ] Verify address: Farnweg 3b, 22459 Hamburg
- [ ] Test all links work
- [ ] Test on mobile devices
- [ ] Test contact form receives emails
- [ ] Review Impressum is complete
- [ ] Review Datenschutzerklärung is correct

---

## 📧 Contact Form Setup

The contact form uses **FormSubmit.co** and is already configured:

- ✅ Sends to: `jrm@jrmlegal.de`
- ✅ DSGVO compliant (no data storage)
- ✅ Email template: Table format
- ✅ Subject: "📩 Neue Kontaktanfrage von [Name]"

**No additional setup required!**

---

## 🔄 Future Updates

To update the website:

```bash
# Make changes to your code
# Then commit and push
git add .
git commit -m "Your update message"
git push

# Vercel will automatically rebuild and deploy! 🚀
```

---

## 📱 Support

If you encounter any issues:

1. Check Vercel deployment logs
2. Verify all environment variables are set (none required for this project)
3. Check build logs for errors
4. Contact Vercel support if needed

---

## 🎉 You're Done!

Your professional legal website is ready to go live.

**GitHub Repository:**
https://github.com/federicodeponte/joshiorojas-website

**Next Step:**
Visit https://vercel.com/new and import the repository!
