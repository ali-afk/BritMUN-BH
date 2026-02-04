# Updating for Next Conference (BritMUN XII)

This guide walks you through updating the website for the next conference year.

**Target audience:** Next year's MUN tech team
**Time required:** 2-3 hours for basic updates
**When to do this:** 2-3 months before next conference

---

## Overview

The website is designed to make year-to-year updates easy. Most changes happen in **one central file**, and everything else updates automatically.

**Key principle:** Update `SiteProperties` → Everything else auto-updates ✨

---

## Step 1: Update Site Properties

**File:** `src/lib/data/shared/site-properties.ts`

This is the **single source of truth** for conference details.

### What to Change

```typescript
export const SiteProperties = {
	siteUrl: "https://britmun.netlify.app", // Usually stays the same

	// Change to next year
	year: "2027",

	// Change to conference dates
	eventDate: {
		start: "2027-01-29", // Format: YYYY-MM-DD
		end: "2027-01-30",   // Format: YYYY-MM-DD
	},

	eventAddress: "https://goo.gl/maps/...", // Usually stays the same

	// Update roman numeral and number
	britmunYear: {
		roman: "XII",  // XI → XII → XIII → XIV
		decimal: "12", // 11 → 12 → 13 → 14
	},

	contact: {
		email: "britmun@thebsbh.com", // Usually stays the same
		tiktok: "...",   // Update if account changes
		instagram: "...", // Update if account changes
	},

	// Update entry fee if changed
	entryFee: "25.000", // In BHD

	resources: {
		// Update with new Google Drive links
		eventPhotos: "https://drive.google.com/...",
		delegateAllocations: "https://drive.google.com/...",
	},
};
```

### What Auto-Updates

Once you change `SiteProperties`, these automatically update:
- ✅ Page titles (`BritMUN XI` → `BritMUN XII`)
- ✅ Meta descriptions
- ✅ JSON-LD structured data (event dates, conference name)
- ✅ Web manifest (PWA name)
- ✅ All endpoints (sitemap, llms.txt, humans.txt)
- ✅ Header navigation links

**No other code changes needed!**

---

## Step 2: Update Global SEO Keywords

**File:** `src/lib/components/shared/Meta.svelte`

Find this line (~line 15):

```typescript
const globalKeywords = [
	"BritMUN XI",               // Change to "BritMUN XII"
	"Model United Nations Bahrain",
	"BSB MUN 2026",             // Change to "BSB MUN 2027"
	"British School of Bahrain",
];
```

Change to:
```typescript
const globalKeywords = [
	"BritMUN XII",
	"Model United Nations Bahrain",
	"BSB MUN 2027",
	"British School of Bahrain",
];
```

---

## Step 3: Update Councils

**File:** `src/lib/data/councils/categories.ts`

### Add/Remove/Update Councils

```typescript
{
	name: "United Nations Security Council (UNSC)",
	image: CouncilImages.Unsc,
	backgroundGuide: "https://drive.google.com/...", // Update link
},
```

**For each council:**
1. Update `backgroundGuide` link to new Google Drive document
2. Add new councils if needed
3. Remove councils that won't run this year

### Update Council Images

If a council logo changes:
1. **Save new image** as WebP format: `static/councils/council-name.webp`
2. **Update image reference** in `src/lib/data/councils/images.ts`:
   ```typescript
   export const CouncilImages = {
     NewCouncil: {
       src: "/councils/new-council.webp",
       width: 400,
       height: 300,
     },
   };
   ```
3. **Use in categories:**
   ```typescript
   image: CouncilImages.NewCouncil,
   ```

---

## Step 4: Update Content

### FAQs

**File:** `src/lib/data/home/faqs.ts`

```typescript
export const faqs: Faq[] = [
	{
		question: "When is BritMUN XII?",
		answer: "January 29-30, 2027", // Update dates
	},
	// ... more FAQs
];
```

**What to update:**
- Dates and deadlines
- Registration information
- Pricing (if changed)
- Any policy changes

---

### Testimonials

**File:** `src/lib/data/home/testimonials.ts`

```typescript
export const testimonials: TestimonialData[] = [
	{
		title: "Delegate",
		year: "2026", // Update to previous year
		comment: "...",
	},
	// ... more testimonials
];
```

**Options:**
1. **Keep previous testimonials** (shows conference history)
2. **Add new testimonials** from recent conference
3. **Mix old and new** (recommended: 6-8 total)

---

### Hero Image

**File:** `src/lib/assets/home/hero.webp`

If you want a new hero image:
1. **Choose a photo** (conference photo, venue, logo design)
2. **Optimize:**
   - Resize to max 1920px wide
   - Convert to WebP format
   - Compress (target: <200KB)
3. **Replace file:** `src/lib/assets/home/hero.webp`

**Tools:**
- [Squoosh](https://squoosh.app/) - Online image optimizer
- [CloudConvert](https://cloudconvert.com/png-to-webp) - Format converter

---

## Step 5: Update PWA Icons

**When to update:** If logo/branding changes

**Files:** All files in `static/` directory
- `icon-192.png`
- `icon-512.png`
- `apple-touch-icon.png`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `favicon.ico`

**How to update:**
1. **Design new logo** (512×512 or larger)
2. **Generate icons:**
   - Go to [RealFaviconGenerator](https://realfavicongenerator.net/)
   - Upload your logo
   - Download icon pack
3. **Replace files** in `static/` directory

See [PWA & Web Standards Guide](pwa-web-standards.md#icon-assets) for details.

---

## Step 6: Update humans.txt

**File:** `src/routes/humans.txt/+server.ts`

Update the team credits:

```typescript
const content = `# TEAM

British School of Bahrain MUN Team

Credits: Ali Hussain Ali, Amr AlSaleh  // Update names

Year: 2026  // Update year
`;
```

Add names of team members who significantly contributed to the website.

---

## Step 7: Update Design Tokens (Optional)

**File:** `src/lib/data/shared/design-tokens.ts`

If you want to change colors/branding:

```typescript
export const DesignTokens = {
	color: {
		primary: {
			500: "#934599", // Main purple
		},
		secondary: {
			500: "#b00e63", // Pink accent
		},
	},
	// ... other tokens
};
```

**What uses these colors:**
- Buttons and links
- Header and navigation
- Cards and components
- Browser theme color (PWA)
- Everything! (via CSS variables)

**To change colors:**
1. Pick new color in [OKLCH Color Picker](https://oklch.com/)
2. Update `DesignTokens`
3. Test contrast for accessibility
4. Deploy and verify

---

## Step 8: Test Everything

Before deploying, verify these work:

### Content Check
- [ ] All dates are correct (multiple places)
- [ ] Conference name shows "BritMUN XII" everywhere
- [ ] Background guide links work
- [ ] External links (photos, allocations) work
- [ ] Contact information is current

### Technical Check
- [ ] Run `bun dev` → site loads without errors
- [ ] Check browser console for warnings
- [ ] Test mobile layout (Chrome DevTools → Device Toolbar)
- [ ] Verify all pages load:
  - [ ] `/` (Home)
  - [ ] `/councils`

### SEO Check
- [ ] [Rich Results Test](https://search.google.com/test/rich-results) → No errors
- [ ] Meta tags show correct year
- [ ] Social preview looks good ([Facebook Debugger](https://developers.facebook.com/tools/debug/))

### Build Check
```bash
bun run build
bun run preview  # Test production build locally
```

- [ ] Build succeeds without errors
- [ ] Preview works (http://localhost:4173)
- [ ] Service worker registers (DevTools → Application)

---

## Step 9: Deploy

### Option A: Auto-Deploy (Recommended)

Simply push to GitHub:

```bash
# Stage all changes
git add .

# Commit with clear message
git commit -m "content: update for BritMUN XII (2027)"

# Push to main branch
git push origin main
```

Netlify automatically builds and deploys within 2-3 minutes.

**Check deployment:**
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Look for "Production" deploy status
3. Click to see logs if there are errors

---

### Option B: Manual Deploy

If auto-deploy doesn't work:

```bash
# Build locally
bun run build

# Install Netlify CLI (if not installed)
bun add -g netlify-cli

# Deploy
netlify deploy --prod
```

---

## Step 10: Post-Deploy Verification

After deploying, verify on the live site:

- [ ] Visit https://britmun.netlify.app
- [ ] Check all pages load correctly
- [ ] Test links (internal and external)
- [ ] Verify mobile layout works
- [ ] Test PWA install (mobile: "Add to Home Screen")
- [ ] Check service worker (DevTools → Application)

### Submit to Search Engines

1. **Google Search Console:**
   - Submit new sitemap
   - Request indexing for updated pages

2. **Check robots.txt:** https://britmun.netlify.app/robots.txt
3. **Check sitemap:** https://britmun.netlify.app/sitemap.xml

---

## Quick Reference Checklist

Print this for quick updates:

```
STEP 1: Update SiteProperties (most important!)
  - year → "2027"
  - eventDate → new dates
  - britmunYear → { roman: "XII", decimal: "12" }
  - entryFee → if changed
  - resources → new Google Drive links

STEP 2: Update Meta.svelte
  - globalKeywords → "BritMUN XII", "BSB MUN 2027"

STEP 3: Update councils
  - categories.ts → background guide links
  - Add/remove councils

STEP 4: Update content
  - faqs.ts → dates, pricing
  - testimonials.ts → add new ones
  - hero.webp → if needed

STEP 5: Update icons (only if logo changes)
  - Generate new icon set
  - Replace in static/

STEP 6: Update humans.txt
  - Team member names
  - Year

STEP 7: Test locally
  - bun dev → check content
  - bun run build → verify no errors

STEP 8: Deploy
  - git add . && git commit && git push
  - Verify on live site
```

---

## Common Issues & Solutions

### Issue: Build fails after updating SiteProperties

**Cause:** TypeScript type error or syntax mistake

**Fix:**
1. Check the error message in terminal
2. Verify dates are in "YYYY-MM-DD" format
3. Ensure all strings are in quotes
4. Check for missing commas or brackets

---

### Issue: Old conference name still shows somewhere

**Cause:** Missed a spot, or browser cache

**Fix:**
1. Search codebase for old name: `rg "BritMUN XI" src/`
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Check that component is using `SiteProperties`, not hardcoded text

---

### Issue: Google Drive links don't work

**Cause:** Links not set to "Anyone with the link"

**Fix:**
1. Open Google Drive file
2. Click "Share"
3. Change to "Anyone with the link can view"
4. Copy new link to `SiteProperties` or `categories.ts`

---

### Issue: Icons don't update on mobile

**Cause:** PWA cached old icons

**Fix:**
1. User must clear browser data
2. Or uninstall PWA and reinstall
3. For testing: use incognito/private browsing

---

## Need Help?

1. **Check documentation:**
   - [Development Guide](development.md)
   - [PWA & Web Standards](pwa-web-standards.md)
   - [SEO Strategy](seo-strategy.md)

2. **Search codebase:**
   ```bash
   # Find where something is used
   grep -r "BritMUN XI" src/
   ```

3. **Test in development:**
   ```bash
   bun dev
   # Open http://localhost:5173
   ```

4. **Ask previous team:**
   - Ali Hussain Ali
   - Amr AlSaleh

---

## Advanced: Major Changes

For significant changes (new pages, features, redesign), see:
- [SvelteKit Guide](sveltekit.md) - Component patterns
- [CSS Guide](css.md) - Styling and design tokens
- [TypeScript Patterns](typescript.md) - Type safety
- [Architecture Decisions](architecture-decisions.md) - Why things work this way

---

**Good luck with BritMUN XII! 🎉**
