// Everything that appears in more than one place lives here.
// Change a nav label once and it updates in the header and the footer.

export const site = {
  name: "Zach",
  tagline: "Writing & Building",
  description:
    "I Share Everything I Learn About SEO Here",
  // Netlify gives you this after your first deploy. Paste it in then.
  url: "https://example.netlify.app",
};

export const nav = [
  { label: "Now", href: "/now" },
  { label: "Build Skill", href: "/build-skill" },
  { label: "Writing", href: "/writing" },
  { label: "Threads", href: "/threads" },
];

// The one action you want people to take. Points at your newsletter.
export const cta = {
  label: "Subscribe",
  href: "https://yourname.substack.com/subscribe",
};

export const socials = [
  { label: "Twitter", href: "https://twitter.com/yourhandle" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yourhandle" },
  { label: "YouTube", href: "https://youtube.com/@yourhandle" },
];

export const legal = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms and conditions", href: "/terms-conditions" },
];

export const secondaryCta = {
  label: "Build Skill",
  href: "/build-skill",
}