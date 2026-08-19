# Lotus Pond Creative To-Do list! ✔⟳𐌗

## These must be done by me!

- Finish the Services page 
  - See if reworking the layout makes sense? 𐌗
  - Figure out what to make the placeholder images be
    - And also decide if they will be shared with the index
  - Update my terms
  - Rename the packages ✔
  - Add new sections for the other kinds of works I can do 

- Create images for:
  - Index About Me Blurb (This will come after the Mascot creation)
  - Services BG (can be shared by index.html and services.html)
  - ~630x400 for the size.
    - Will still use background-size: cover; though

- Brand Design Portfolio 
  - Figure out a better way of showcasing my brand design work in the Brand Design portfolio
    - Right now, I only have HMS (assets\BrandIdentities\HMSDisplayVer.png) on display but it looks kind of lazy... 
      - Inspo is here: devStuff\inspiration\BrandDesignShowcase\ and assets\AppPortfolio\business\somori\BrandStyleGuide.png
  - Add Brand Designs for IWYR, IdolLine, DolcetTech, etc

- 3D Modelling Portfolio
  - Create it 
  - Add Aiadoru as a project. This should probably have it's own major page in the future!
  - Add the mascot (After I create her)

- Create the site mascot in VRoid

- Update a few of the App Dev portfolio project pages
  - Hanasato needs more writing
  - Finish Ponder and ConvoJo's pages entirely
  - Add my Henry Ford Health Vision Pro app here! 

- Update Web Design Portfolio
  - Update IWYR showcase to show more up to date pages of the site

- Replace the 2023 graphics in the Digital Design portfolio with new ones

- Edit CTA on: ⟳
  - About Me ✔
  - Portfolio ⟳
  - Update the one on the Services page
  - Update the one on the Index page too

# Done! 
- Update placeholder images
- Maybe decide if I'm going to rebrand or not 𐌗
  - LPC no longer matches my identity. I came up with it back in 2022 and it has since become outdated. We'll see about this though. 
- Decide if I want to redesign the site from the ground up (matching the rebrand idea) 𐌗
  - Right now, it reads very corperate. That's just not me. I've found so many cool portfolio sites in existence that have inspired me to make mine way more cool!
    - I was inspired by https://www.abileedesigns.com/, The Pink Pony and https://owltastic.com/ for this version of the site, but they are more corperate polished than I am. I need to go my own route!
^ At least, not for now!

- Link my Ko-Fi as the "Mini Shop" link in Nav ✔
- Figure out the Contact page ⟳
  - Right now it's just terribly laid out. I need to fix it really bad lol ✔
  - We may revisit this again...
- Update the CSS ✔
  - The brand colors need to be used better ✔
  - The teal was very difficult to keep accessible. I might need to pivot from using this color as a background color entirely! 𐌗
    - I need to incorperate more pink and green in! ✔
      - The site is almost completely backwards of the actual brand colors ... lol ✔
        - Pink and green should be the main colors.............. !!!!!!!!!!!!!!!!!!!!!! ✔
  - Update the About Me page to have a background color for the aboutMain section (you know, where the text is!) ✔
    - Should absolutely use the logo yellow for this too (at least 1 section... see below) ✔
    - Could also use a half and half color system for the sections, in the same way Abi Lee does. ✔
  - Need to make all of the sections coherent... ✔
    - Some are green, some are yellow... some are even teal blue !!! ✔
  - Add scrollbar styling ✔

- Update the html ⟳
  - Layout updates needed:
    - The index really needs a refresh. I absolutely hate the way it looks right now!!!!!! ✔
      - I'm thinking about a mix of my 2 references: https://www.abileedesigns.com/ https://owltastic.com/
        - Keep the startDisplay section mostly the same ✔
          - The background should be different than just plain background color (if we change the color from teal, that would be even better) ✔
            - Could also have a design from CSS from something like: https://www.magicpattern.design/tools/css-backgrounds or https://css-pattern.com/ ✔
        - The aboutBlurb section needs a relayout ✔
          - There should be some kind of image here ✔
          - If not that, we can do something like what Owltastic does: make the next not as wide on here. 𐌗
          - If not that, then I should go the route of removing this section and merging its content into the startDisplay instead (like AbiLee) 𐌗
        - Move the skills section to the about me page instead of having it here! ✔
          - I could also rework the layout of this section entirely because it's kind of terrible right now. ✔
        - Move the Featured Works section above services! ✔
          - Also change how this diaplay case looks... I don't like it right now! ✔
        - Update the services section to include images ✔
          - I really like how AbiLee does it. She has a (relevant) background with a small box over it with text about the service! (I'd obviously do this in a more "Me" way) ✔
            - There's also a "See More" style button under the image section which takes us to the services page, which is a good call to action to have! ✔
            - Could also use the same images on the Services page afterwards ✔
              - This also forces me to work on those images early, which is exactly the kind of incentive I need! ✔
    - Rework the navbar to be more interesting in design! ✔
      -  I found another portfolio site that I like the navbar of! https://www.zachjordan.io/ ✔
    - The rest are negligable, but if anything 𐌗
      - The actual portfolio page (and its sections) could be made more unique!  𐌗
  - The footer could use an update ✔
    - Some links absolutely need to be removed, and others need to be added ✔
      - Like Facebook... *shivers* ✔
      - Also, I think I need to update the link to my LinkedIn: https://www.linkedin.com/in/morgan-harris-51a968281/ ✔
  - Make sure all of the html semantics are right... most of them should be, but some of them are not. ✔
- Mobile Compatibility Setup ✔
  - Index ✔
    - The startDisplay needs to be rescaled ✔
    - Hide the spacer columns in the Services section  ✔
  - About Me  ✔
    - The header should become column-reverse stacked (text on bottom) ✔
    - text-align: center the main section header ✔
    - Hide the spacer columns in the main section ✔
  - Portfolio ✔
    - text-align center the text in the header ✔
      - visually center the sub as well (it's not full width) ✔
    - The nav tabs should be style-modified to sit next to each other as buttons instead of tabs (right now they're overflowing the view on mobile) ✔
    - Not sure if this is caused by the tabs overflowing, but the actual portfolio sections are overflowing the right side of the screen as well ✔
  - Services
    - Mobile emphasis sections:
      - Should stack vertically ✔
      - Should have smaller text ✔
    - Add .img-fluid to the service images ✔
    - The design progress sections should stack vertically on mobile. ✔
  - Contact ✔
    - Not exactly mobile specific, but the height of the section might need to be artificially inflated because it looks a bit weird on both mobile and PC since there's not enough content ✔
    - The main section's header text is WAY to big on mobile (OUR FRIENDSHIP...)
      - This is likely because the font changed. Either way, the font size has GOT to go down. ✔
    -  Add some more horizontal padding to the main section too ✔
- Update Web Design Portfolio ✔
  - Display cases should have 2 per row instead of 1 ✔
  - Fix outlines on the display cases  𐌗
    -  Or just remove the outline entirely  𐌗
 -  I am realizing that I straight up don't like how the website display case (and frankly, the web design portfolio) is structured at the mooment. I want to come up with a cooler way. 
    -  What if they were designed to look more like Windows... windows? ✔
       - This would be without most of the interactive elements like resize, drag etc.   - Buttons could be clickable just for some tactile fun, (in my style)! ✔
    -  Also I don't think we need the "see the site" button anymore. The whole design could be a button. That's how it should have been anyways! ✔
-  After above, we add the Ko-Fi previews (kofiTemplates\) ✔
- Portfolio Items ✔
  - Find out if it's legal for me to showcase ANDROMEDA's OBSESSION from IWYR
    - Note: Because I'm not making money from it, it's mostly ok. The worst that could happen is for me to get asked to take it down, which is no big deal.
- Update the about page content to represent 2026 me better! ✔