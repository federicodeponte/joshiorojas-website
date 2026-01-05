# Profile Photo Setup

## Current Status
The website is configured to display a profile photo at `/public/avatar.jpg`

## To Add Your Photo

1. **Prepare your photo:**
   - Professional headshot
   - Square aspect ratio (1:1) recommended
   - Minimum 400x400px
   - Maximum 2MB file size
   - Format: JPG or PNG

2. **Add the photo:**
   - Save your photo as `avatar.jpg` in this `public/` directory
   - The filename must be exactly: `avatar.jpg`
   - It will automatically display in the hero section

3. **Alternative formats:**
   If you want to use a different format (PNG, WebP):
   - Update the filename in `/src/data/resume.tsx`
   - Change `avatarUrl: "/avatar.jpg"` to your filename
   - Example: `avatarUrl: "/profile.png"`

## Placeholder Behavior

If no avatar image is present:
- The website will show initials "JRM" in a circular placeholder
- This is intentional fallback behavior
- No errors will occur

## After Adding Photo

1. Commit and push the new image:
```bash
git add public/avatar.jpg
git commit -m "Add profile photo"
git push
```

2. Vercel will automatically redeploy with the new image

## Photo Guidelines

✅ Professional appearance
✅ Clear facial features
✅ Neutral or maritime blue background (optional)
✅ Good lighting
✅ Business appropriate

❌ Avoid casual photos
❌ Avoid group photos
❌ Avoid poor lighting
❌ Avoid outdated photos
