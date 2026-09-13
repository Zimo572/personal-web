// Everything that appears in more than one place lives here.
// Change a nav label once and it updates in the header and the footer.

export const site = {
  name: "Zach",
  tagline: "Writing & Building",
  description:
    "I Share Everything I Learn About SEO Here",
  // Netlify gives you this after your first deploy. Paste it in then.
  url: "https://elaborate-granita-c070e5.netlify.app/",
};

export const nav = [
  { label: "Build Skill", href: "/build-skill" },
  { label: "Articles", href: "/articles" },
  { label: "Podcast", href: "/podcast" },
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

export const podcastLinks = [
  { label: "Apple Podcasts", href: "https://podcasts.apple.com/..." },
  { label: "Spotify", href: "https://open.spotify.com/show/..." },
  { label: "YouTube", href: "https://youtube.com/@yourhandle" },
  { label: "Email", href: "https://yoursubstack.substack.com/subscribe" },
];