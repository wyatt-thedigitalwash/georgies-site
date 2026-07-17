# EXTRACTION — Georgie's Social House (georgieslexington.com)

Faithful extraction of the live client site for a native rebuild. Content recorded
verbatim from the live pages and the linked PDFs. Do not edit copy; reproduce as-is.

Live source pages:
- https://georgieslexington.com/ -> route `/`
- https://georgieslexington.com/menu/ -> route `/menu`
- https://georgieslexington.com/parties_events/ -> route `/parties-events`
- https://georgieslexington.com/gallery/ -> route `/gallery`
- https://georgieslexington.com/contact/ -> route `/contact`

Extraction method: raw HTML via curl (WordPress/Divi is server-rendered) parsed for
text/links/images; the three linked menu PDFs downloaded and parsed, with the current
menu (Summer 2026) rendered to image and read visually for exact prices.

---

## 1. SITE CHROME

### Header navigation (ordered label -> URL)
1. Home -> `/`
2. Menu -> `/menu`
3. Parties & Events -> `/parties-events` (live: `/parties_events/`)
4. Gallery -> `/gallery`
5. Contact -> `/contact`
6. Join Our Team -> `https://georgieslexington.com/wp-content/uploads/2023/12/EmploymentApplicationOCT2023-1.pdf` (opens the employment application PDF)

Logo (links to `/`): `GeorgiesLogoBlack.png` — the "georgie's / social house" wordmark.

### Tagline
"refined adulting" (hero) / "REFINED ADULTING" (section + contact). Also written
"Refined Adulting" in body copy.

### Footer content (appears on every page)
- Block: `ESTABLISHED 2023`
- Address block: `161 N LIMESTONE ST.` / `LEXINGTON, KY` / `40507`
- `HOURS` — `WED — FRI` `4PM — LATE` / `SAT — SUN` `2PM — LATE`
- `LINKS` column:
  - Join our team -> employment application PDF (URL above)
  - Menu -> `/menu`
  - Contact -> `/contact`
  - Privacy Policy -> `https://georgieslexington.com/privacy-policy/`
- Social icons: Instagram, Facebook, (link/website icon)
- Copyright line: `© 2026 Georgie's`
- Credit line (live): "(Georgie's 's website was designed by Jarod Thornton & maintained by Adopt the Web)" — **omit designer/maintainer credit in the rebuild** (not client-owned); keep `© Georgie's`.

### Social + map links (site-wide)
- Instagram: `https://www.instagram.com/georgies_socialhouse/`
- Facebook: `https://www.facebook.com/p/Georgies-Social-House-100088811977072/`
- Google Maps: `https://www.google.com/maps/place/Georgie's+Social+House/@38.0476243,-84.4981841,17z/data=!3m2!4b1!5s0x884244ee84be4c05:0x29e592ea9452be5e!4m6!3m5!1s0x88424584cd78251b:0xcc1e8643bf1f9f33!8m2!3d38.0476243!4d-84.4956092!16s%2Fg%2F11jzntm9dv?entry=ttu`

---

## 2. PER-PAGE CONTENT (top to bottom, verbatim)

### HOME (`/`)
`<title>` Modern Lexington Bar & Event Venue | Georgie's Social House

**Hero**
- Tagline: "refined adulting"
- Buttons: "explore menus" -> `/menu` · "explore parties & events" -> `/parties-events`
- Background image: `Georgies-14.jpg` under a dark overlay `rgba(43,43,43,0.7)`.

**Section: OUR SPACE** (image: `georgiesreplacementphoto.png`, alt "Guests enjoying drinks at the bar and event space in Lexington, KY")
> Welcome to Georgie's Social House! Come experience what we call Refined Adulting right here in Lexington. Enjoy hand crafted cocktails, chef prepared charcuterie boards & gourmet hotdogs and our extensive wine & bourbon collection in an unbeatable atmosphere. Each cocktail is named after a famous George – and homage to George's Deli that occupied our space for 35 celebrated years prior to our opening in 2022.
>
> We are situated in a charming local community along Limestone, offering impressive views of the nearby courthouses along the Limestone Corridor neighborhood. Among our friendly neighbors is Lussi Brown Coffee Bar, with whom we get our cold brew for our wildly popular espresso martini, known as The Force, named after the legendary creator of Star Wars, George Lucas.
>
> Hang out with friends or through a party with us! Georgie's is the event space you've been looking for with customizable options and ease of booking – we're a unique party location for rehearsal dinners, birthday celebrations, bridal showers and private or corporate events.
- Button: "get directions" -> Google Maps (URL above)

**Section: REFINED ADULTING** (image: `Georgies-60.jpg`)
> Join us for a brand-new socializing experience we like to call refined adulting. Here you can indulge in specialty craft cocktails, an impressive wine and bourbon selection, tasty charcuterie boards and polished hospitality while relaxing in an atmosphere of comfort and style. From the moment you lay eyes on our event space, you know attention to detail is our thing. Our space and services are separately designed to delicately enable solo adulting as well as performing as a special celebration venue in Lexington.
- Button: "view gallery" -> `/gallery`

**Section: OUR COCKTAILS** (image: `Georgies-50.jpg`, alt "A cocktail is being prepared")
> Our craft cocktail selection is one-of-a-kind, and each cocktail is artfully developed in-house with care and precision by our mixologist Donny. He takes pride in his work and he's always eager to create new and exciting flavors to meet your taste and the party fervor. Not only have we crafted each cocktail with thought and care, but we also dedicated significant time to naming each one.
>
> Our cocktails are inspired by famous Georges, with names that are clever and creative, adding to the overall experience of drinking craft cocktails at Georgie's. Our menu will change seasonally to reflect the freshest available ingredients and seasonal pallet needs. We even offer stellar zero-proof cocktails for those moments when you want to enjoy the taste of an excellent drink without the alcohol. As a result, our Lexington party venue is ideally aligned to hold all kinds of parties and events from team-building activities to birthday parties and bridal showers.
- Button: "drink menu" -> `/menu` (live links the Spring drink PDF)

**Section: NOSH** (image: `Georgies-5.jpg`)
> We offer a delightful and thoughtfully curated simple nosh menu that perfectly complements our artisanal cocktails. Our menu boasts a selection of small bites designed to elevate your tasting experience. We also curate our selection of wines and cocktails as well as charcuterie and other nosh depending on individual needs and the spirit of the party.
- Button: "food menu" -> `/menu` (live links `Georgies-Summer-2026.pdf`)

**Section: THE EXPERIENCE**
> The top priority here at Georgie's is to provide our patrons with a distinct, one-of-a-kind space to gather, converse, and enjoy an unparalleled experience.
>
> As soon as you step foot into our establishment, you'll be greeted with a fresh energy and immediate comfort, inspiring you to bask in the beauty and pleasure of life.
>
> Working closely with Christopher Michael Designs, we've cultivated an aesthetically beautiful interior space that boasts a modern twist on traditional bar design, sure to delight and excite our clientele.
>
> The space seamlessly and intrinsically gels with a wide range of events, parties, and celebrations. Whether you are seeking a small party venue in Lexington, KY, or want to hold large team-building events, we can make that happen for you!
>
> Even our exterior planters have been arranged to create the perfect ambiance for our sidewalk café. Our front windows feature sleek and modern garage doors that connect the outdoor environment to the inside, allowing you to enjoy the best of both worlds.
>
> At Georgie's, we're proud to provide a space that fosters unforgettable memories and experiences with every visit. We operate on a first-come, first-serve basis, and unfortunately, we do not accept reservations at this time. However, we do offer a convenient walk-up waitlist, and in the event that we're at capacity when you arrive, our team will promptly notify you via text as soon as a seat becomes available.
>
> As a sister concept of the popular downtown bar Centro, our goal is to continue to bring you fresh and exciting experiences that will have you returning time and time again. We can't wait to see you celebrating life at Georgie's!

**Section: PARTIES & EVENTS** (image: `Event-Photos_0004_Parties-Events.jpg`)
> Instead of sitting at opposite ends of the table, rediscover the joy of mingling and socializing at Georgie's Social House! Our bar and event space in Lexington, KY is designed to put the fun back into your gatherings, whether it's a rehearsal dinner, corporate event, or a special celebration. Enjoy handcrafted cocktails, impeccable service, and an atmosphere encouraging connection and laughter. Join us for our exclusive Friday Supper Club, where you can relish a delightful culinary experience with a carefully curated menu and signature cocktails. Kick off your evening with our vibrant Happy Hour Party, enjoying special deals on drinks and appetizers in a lively, stylish setting. Celebrate life's special moments with bridal and baby showers in our intimate and charming environment, perfect for creating memorable experiences. For private events, from corporate gatherings to anniversaries, Georgie's Social House offers the ultimate event venue in Lexington, KY to ensure a unique and unforgettable experience. Contact us today to transform your event into an unforgettable experience at Georgie's Social House!
- Button: "view parties & events" -> `/parties-events`

**Section: GEORGIE'S IN THE PRESS**
- "New downtown Lexington bar rises to new heights" — "read article" -> `https://www.kentucky.com/article274502901.html` (logo: `herald-leader.png`)
- "Georgie's Social House Open" — "read article" -> `https://smileypete.com/business/cannabuzz-bar-and-georgies-social-house-open/` (logo: `smaile-pet.png` = Smiley Pete)

---

### MENU (`/menu`)
`<title>` Menu - Georgie's

Live page shows four tab/CTA labels — `MENU`, `WINE LIST`, `HAPPY HOUR`, `PARTIES` —
that all point at the current menu PDF (`Georgies-Summer-2026.pdf`). Rebuild the menu
NATIVELY as HTML (see Section 4). Use the Summer 2026 PDF as the authoritative current
menu. Suggested native tab/section structure: Cocktails · Wine · Beer · Nosh · Happy Hour.

---

### PARTIES & EVENTS (`/parties-events`, live `/parties_events/`)
`<title>` Party & Event Venue Lexington, KY | Georgie's Social House - A Downtown Lexington Bar

**Section: Private Parties & Events**
> Instead of sitting at opposite ends of the table, rediscover the joy of mingling and socializing at Georgie's Social House. Our venue is designed to put the fun back into your gatherings, whether it's a rehearsal dinner, corporate event, or special celebration. Enjoy handcrafted cocktails, impeccable service, and an atmosphere that encourages connection and laughter. Contact us today to transform your event into an unforgettable experience at Georgie's Social House.

**Section: FRIDAY SUPPER CLUB** (image: `Event-Photos_0002_FRIDAY-SUPPER-CLUB.jpg`, alt "Food being served at the event venue in Lexington, KY")
> Experience the Exclusive Friday Supper Club at Georgie's Social House!
>
> Rather than traditional seating arrangements, embrace the joy of mingling and socializing in our uniquely designed venue. Whether it's a rehearsal dinner, corporate event, or special celebration, Georgie's Social House redefines gatherings with handcrafted cocktails, a meticulously curated selection of wines and bourbons, exceptional service, and an ambiance that fosters connection and laughter. Contact us now to elevate your event into an unforgettable experience at Georgie's Social House!

**Section: HAPPY HOUR PARTY** (image: `Event-Photos_0001_HAPPY-HOUR-PARTY-.jpg`)
> Foster Team Spirit at Georgie's Social House!
>
> Our happy hours are more than just a time to unwind – they're opportunities to build strong bonds and foster team spirit. Join us every Wednesday through Friday until 7pm for a curated experience that includes special rates on drinks and nosh as well as reserved tables. Elevate your team building efforts in a stylish setting that encourages connection and creativity. Book your spot today and discover how Georgie's transforms ordinary happy hours into extraordinary team experiences.
- Button: "explore happy hour" -> `/menu` (live links the Spring Menu PDF)

**Section: BRIDAL & BABY SHOWERS** (image: `Event-Photos_0000_BRIDAL-BABY-SHOWERS.jpg`, alt "Loved ones enjoying an intimate bridal shower party")
> Elevate Your Bridal or Baby Shower at Georgie's Social House!
>
> Immerse yourself in a gorgeous atmosphere and indulge in a curated selection of wines and cocktails as well as charcuterie and other nosh. Our stylish venue provides the perfect backdrop for creating unforgettable memories. Contact us today to host your event and discover why Georgie's Social House is the ideal destination for your celebration. Can accommodate groups of 15 or more. Contact us today to secure your date and ensure a memorable experience for you and your guests.

**Section: PRIVATE EVENTS** (image: `Event-Photos_0003_PRIVATE-EVENTS-.jpg`)
> Planning a special occasion? Our bar, Georgie's Social House, offers an exclusive venue for private events that guarantees a memorable experience. Whether you're celebrating a birthday, rehearsal dinner or hosting a corporate gathering, Georgie's provides the perfect setting. Enjoy our stylish and inviting bar atmosphere exclusively for your event.
>
> Weekend night, DJ and catered food options available. Available any day of the week. Contact us today to secure your date and ensure a memorable experience for you and your guests.
- Buttons: "inquire now" -> `mailto:events@georgieslexington.com` · "discover more" -> `/parties-events-discover-more/` (live sub-page; keep as button; may 404 in rebuild — log if built)
- Caption at bottom: "Event images shown courtesy of @sladesocial."

---

### GALLERY (`/gallery`)
`<title>` Gallery - Georgie's
A grid of 21 photos (originals `Georgies-56, -14-1, -1, -57, -19-1, -7, -5-2, -73, -2, -50-1, -25, -23, -12, -35, -47, -37, -60-1, -88, -66, -85, -67`).
No body copy. Downloaded as `gallery-01.jpg` … `gallery-21.jpg` (same order).

---

### CONTACT (`/contact`)
`<title>` Contact - Georgie's

**Hero heading (stacked):** `EXPERIENCE` / `REFINED` / `ADULTING`

**Info block:**
- `ESTABLISHED 2023`
- `161 N LIMESTONE ST.` / `LEXINGTON, KY` / `40507`
- `Hours` — `WED — FRI` `4PM — LATE` / `SAT — SUN` `2PM — LATE`
- `Email` — hello@georgieslexington.com (`mailto:hello@georgieslexington.com`)
- `Text Only` — (859) 838-1531

**Contact form** (fields, verbatim labels):
- "Name *" — First / Last
- "Email *"
- "Phone"
- "Comment or Message"
- SMS Consent checkbox, verbatim:
  > By checking this box, you agree to receive SMS messages from Georgie's Social House related to marketing, customer care and delivery notifications. You may reply STOP to opt-out at any time. Reply to HELP to (859) 212-9080 for assistance. Messages and data rates may apply. Message frequency will vary. Learn more on our Privacy Policy page.
- Submit button: "Submit"

---

## 3. LINKED DOCUMENTS (crawled from all pages)

| Document | URL | Linked from | Status |
|---|---|---|---|
| Employment Application (PDF) | `/wp-content/uploads/2023/12/EmploymentApplicationOCT2023-1.pdf` | Header + footer "Join Our Team" (all pages) | Downloaded; parse below |
| Summer 2026 Menu (PDF) — CURRENT | `/wp-content/uploads/2026/04/Georgies-Summer-2026.pdf` | Home "food menu"; Menu page tabs | Downloaded + parsed (authoritative menu) |
| Spring Menu (PDF) — older | `/wp-content/uploads/2024/04/Georgies-Spring-Menu.pdf` | Parties "explore happy hour" | Downloaded + parsed (superseded) |
| Drink Menu (PDF) — older | `/wp-content/uploads/2024/10/Georgies-Spring-Menu-.pdf-1711643554334-7-5.pdf` | Home "drink menu" | Downloaded + parsed (superseded) |

### Employment Application PDF (parsed) — "Employment Application", 3 pages
Standard printable job-application form (no marketing copy). Sections & fields:
- **Personal Information:** Last/First/Middle Name, Today's Date, Street Address, City, State, Zip, Home Phone; US citizen/eligible to work (Yes/No); Social Security Number; S.T.A.R.S Certified (Yes/No); Date of Birth; previously cited by any ABC agency for improperly handling/serving alcohol (Yes/No); Position Applying For; Date Available to Work; convicted/charged with misdemeanors or felonies (Yes/No, explain); hours per week desired; currently employed (Yes/No) and may we contact present employer (Yes/No).
- **Education:** rows for High School / College / Graduate School / Technical or Certificate Programs — columns Name and Location, # Years Completed, Major Area of Study, Degree/Diploma.
- **Employment History:** three previous employers (most recent first) — Employer, Dates Employed (From/To), Job Title, Address, Telephone, Job Duties, Weekly Pay (Start/Finish), Reason for Leaving.
- **Qualifications:** free-text describing qualifications, skills, special training.
- **References:** table — Name, Address, Phone #, Relationship/Occupation, Years Known.
- **Availability:** grid SUN–SAT with Start Time / End Time rows.

Rebuild handling: header/footer "Join Our Team" links to this PDF served from `/employment-application.pdf` (copied into `/public`). Not rebuilt as an HTML form (out of scope; it is a printable document).

---

## 4. CURRENT MENU (Summer 2026 PDF) — VERBATIM & STRUCTURED

Prices are dollars (no `$` on menu). Descriptions: *italic tagline* then ingredient list.
Footer on every menu page: `161 N Limestone, Lexington, KY` · `www.georgieslexington.com` · `@georgies_socialhouse`
Disclaimer: "*Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness"

### TRADITIONAL COCKTAILS  (note: "liquor substitutions & other cocktail options available")
| Item | Price | Ingredients |
|---|---|---|
| margarita | 13 | Tres Agaves Organic Tequila, St Germain, Fresh House Made Sweet & Sour, Salted Rim |
| strawberry mule | 13 | Wheatley Craft Distilled Vodka, Housemade Strawberry Purée, Q Mixers Ginger Beer, Fresh Mint |
| sangria | 13 | Red Wine Blend, Cointreau, Fresh Squeezed Fruit Juices |
| old fashioned | 13 | Old Forester, Luxardo Cherry, Orange Bitters |

### HOUSE CRAFTED COCKTAILS
Each has a *tagline* and namesake George.
| Item | Price | Tagline / namesake | Ingredients |
|---|---|---|---|
| the best | 15 | bliss in a glass; namesake George Best | Blacklion Sustainable Vodka, Giffard Coconut & Violette Liqueurs, Fresh Lime Juice, Coconut Water |
| georgie porgie | 14 | luxurious, silky, decadent; namesake children's nursery rhyme | Disaronno, Old Forester 100p Rye, Fresh Lemon, Abricot Du Roussillon, Egg White* |
| clooney | 14 | cool, refreshing margarita twist; namesake George Clooney | Casamigos Tequila, Maize Liqueur, Fresh Lime Juice, Sweet Pepper & Herb House Syrup |
| viva | 15 | paloma aka mexico's national drink; namesake George Lopez | Lalo 100% Additive Free Tequila, Fresh Squeezed Grapefruit & Lime Juice, Agave, Tajin |
| big brother | 14 | tried & true hugo spritz; namesake George Orwell | St. Germaine Elderflower Liqueur, Castle & Key Seasonal Gin, La Marca Prosecco, Fresh Mint |
| the force | 14 | our espresso martini; namesake George Lucas | Wheatley Craft Distilled Vodka, Lussi Brown's Cold Brew, Kahlua Liqueur, Espresso |
| quiet beatle | 14 | approachable crowd pleaser; namesake George Harrison | Roots of Ruin Gin, Montenegro, Giffard Pamplemousse Grapefruit Liqueur, Fresh Lemon |
| funkadelic | 14 | tropical, well-loved funkaliciousness; namesake George Clinton | Plantation Pineapple Rum, Yellow Chartreuse, Aperix Aperitivo, Fresh Squeezed Lime |

### ZERO PROOF
| Item | Price | Tagline / namesake | Ingredients |
|---|---|---|---|
| jungle crush | 9 | booze-less strawberry smash; George of the Jungle | Seedlip Garden 108, Fresh Strawberries & Basil |
| the jetson | 9 | incredibly delightful paloma mocktail namesake George Jetson | Seedlip Notas De Agave, Fresh Grapefruit & Lime |

### WHITE WINE  (by the glass)
| Item | Price | Detail |
|---|---|---|
| stella rosa | 9 | Moscato: Piedmont, Italy |
| pieropan | 11 | Soave Classico: Veneto, Italy |
| j vineyards | 11 | Pinot Gris: Napa, CA |
| la crema | 12 | Sauvignon Blanc: Sonoma County, CA |
| daou reserve | 12 | Rosé: Paso Robles, CA |
| raeburn | 12 | Chardonnay: Sonoma County, CA |

### RED WINE  (by the glass)
| Item | Price | Detail |
|---|---|---|
| nicky hahn | 10 | Pinot Noir: Monteray, CA |
| louis m. martini prati | 13 | Cabernet Sauvignon: Sonoma, CA |
| siduri | 12 | Pinot Noir: Willamette Valley, OR |
| don miguel gascón | 11 | Malbec: Mendoza, Argentina |
| austin hope | 15 | Cabernet Sauvignon: Paso Robles, CA |
| st. francis old vine | 14 | Zinfandel: Sonoma, CA |

### SPARKLING  (by the glass)
| Item | Price | Detail |
|---|---|---|
| 101 bubbles | 9 | Sparkling Champagne: Mendoza |
| poema pura cava organic | 10 | Brut: Penedes Valley, Barcelona, Spain |
| la marca Extra Dry | 11 | Prosecco: Veneto, Italy |
| poema rosé cava | 10 | Brut Rosé: Monteray, CA |

### BEER
| Item | Price |
|---|---|
| austin east cider | 6 |
| coors banquet | 5 |
| guinness | 9 |
| high noon | 7 |
| la fin due monde | 9 |
| lagunitas ipa | 8 |
| michelob ultra | 6 |
| miller lite | 6 |
| modelo | 6 |
| pbr | 5 |
| peroni | 8 |
| oberon | 7 |
| stella artois | 8 |

### NOSH
| Item | Price | Detail |
|---|---|---|
| charcuterie board | sm 12 / lg 21 | Daily Chef Selections; vegetarian option available |
| gourmet hotdog | 6.5 | Truffle Mayo, Housemade Relish, Stoneground Mustard |
| marinated olives | 8 | |
| marcona almonds | 5 | |

### HAPPY HOUR  (every day til 6pm)
- 1/2 Price ALL Beers & Wine by the Glass
- $5 Gourmet Hotdogs, Weller Reserve, Tito's
- $10 Charcuterie Boards

---

## 5. CONTACT DETAILS (exact)
- Address: 161 N Limestone St., Lexington, KY 40507
- Hours: Wednesday to Friday 4PM to Late; Saturday to Sunday 2PM to Late
- Email: hello@georgieslexington.com
- Text Only: (859) 838-1531  (SMS help line referenced: (859) 212-9080)
- Events email: events@georgieslexington.com
- Instagram: @georgies_socialhouse (see URL above); Facebook + Google Maps URLs in Section 1.
- Established 2023. Sister concept of downtown bar "Centro". Interior by Christopher Michael Designs.

---

## 6. BRAND TOKENS
Colors (sampled):
- Brand green `#4d5b50` — primary accent (buttons, headings underline, links). Most-used brand color.
- Dark `#2b2b2b` — primary text + hero overlay (`rgba(43,43,43,0.7)`).
- Cream / menu background `#f2f1df` — warm eggshell used on the menu PDF; use for menu surface.
- White `#ffffff` — page background / cards.

Fonts:
- Display / headings: **Spectral** (Google serif, weights 300–800) — matches the menu's elegant serif. Use for section headings + menu.
- Body / nav: proprietary "RatioModern" (grotesque). Closest Google equivalent: **Inter** or **Work Sans**. Use a clean sans for body/nav.
- Logo wordmark: proprietary "BarteldesSmallMedium" (rounded friendly bold). We use the actual logo PNG (`logo-georgies-black.png`) so no font substitution needed.

---

## 7. IMAGES (downloaded to /public/images)
| File | Source original | Page / section | Description |
|---|---|---|---|
| home-hero.jpg | Georgies-14.jpg | Home hero | Interior/bar, used under dark overlay |
| home-our-space.png | georgiesreplacementphoto.png | Home OUR SPACE | Guests enjoying drinks at the bar |
| home-refined-adulting.jpg | Georgies-60.jpg | Home REFINED ADULTING | Bar/venue interior |
| home-our-cocktails.jpg | Georgies-50.jpg | Home OUR COCKTAILS | A cocktail being prepared |
| home-nosh.jpg | Georgies-5.jpg | Home NOSH | Nosh / charcuterie |
| home-parties.jpg | Event-Photos_0004_Parties-Events.jpg | Home PARTIES & EVENTS | Event/party scene |
| press-herald-leader.png | herald-leader.png | Home PRESS | Herald-Leader logo |
| press-smiley-pete.png | smaile-pet.png | Home PRESS | Smiley Pete logo |
| logo-georgies-black.png | GeorgiesLogoBlack.png | Header/footer | "georgie's social house" wordmark |
| favicon-source.png | GeorgiesFavicon.png | Favicon | Georgie's favicon source |
| parties-friday-supper-club.jpg | Event-Photos_0002 | Parties FRIDAY SUPPER CLUB | Food being served at the venue |
| parties-happy-hour.jpg | Event-Photos_0001 | Parties HAPPY HOUR PARTY | Happy hour scene |
| parties-bridal-baby-showers.jpg | Event-Photos_0000 | Parties BRIDAL & BABY SHOWERS | Intimate bridal shower |
| parties-private-events.jpg | Event-Photos_0003 | Parties PRIVATE EVENTS | Private event scene |
| gallery-01.jpg … gallery-21.jpg | Georgies-56 … -67 | Gallery grid | 21 venue/food/drink photos |

Decorative-only assets intentionally skipped: `new-1.svg` (Divi section-divider swoosh),
social `.svg` icons (replaced with lucide-react icons). Event photos courtesy of @sladesocial.

### Images that would not download
- None. All 21 gallery + all section/press/logo images downloaded successfully.

---

## 8. GAPS / DELTAS LOG
- Live footer includes third-party designer/maintainer credit ("Jarod Thornton / Adopt the Web") — intentionally omitted from rebuild.
- `discover more` on Parties links to live sub-page `/parties-events-discover-more/` — not in the 5-page scope; button retained pointing to that content is TBD (log if not built).
- Employment application PDF parsed (Section 3); copied to `/public/employment-application.pdf`; "Join Our Team" links there.
- `discover more` (Parties) originally pointed to live sub-page `/parties-events-discover-more/` (out of the 5-page scope); in the rebuild it points to `/contact`.
- Menu-related buttons (`drink menu`, `food menu`, `explore happy hour`) linked to menu PDFs on the live site; in the rebuild they point to the native `/menu` page (per the "no PDF substitute" rule).

### Phase 2 verification outcome (all pages PASS)
Verified against the 9-point checklist at desktop (1280px) and mobile (390px) via screenshots; production build (`next build`) passes TypeScript + lint with all 11 routes generated.
- **Home** — pass (first build). Hero, Our Space, Refined Adulting, Our Cocktails, Nosh, The Experience, Parties & Events, Press all present in order; verbatim copy; brand green CTAs.
- **Menu** — pass (first build). Native HTML from Summer 2026 PDF; every category, item, description, and price correct; jump-links; cream surface; dark Happy Hour block.
- **Parties & Events** — pass (first build). Intro + Friday Supper Club, Happy Hour Party, Bridal & Baby Showers, Private Events (two CTAs) + @sladesocial credit.
- **Gallery** — pass (first build). 21 real photos in responsive grid.
- **Contact** — pass (first build). Stacked EXPERIENCE/REFINED/ADULTING heading, info block, working form with server-side validation (422 on empty, 200 on valid) and full SMS-consent copy.
- **Shared** — header nav order + working mobile nav; dark footer with address, hours, links, social; Spectral display + Inter body; no em dashes; SITE.md and the globals.css section-spacing rule untouched.
- **No unresolved deltas.** All 35 images downloaded and placed; no placeholders needed.
