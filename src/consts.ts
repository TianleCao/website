import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Tianle Cao, Ph.D.",
  EMAIL: "caotianlebme@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal portfolio and learning blog of Tianle Cao, Ph.D.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on my learning journey and research.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my research projects and publications.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/tianle-cao-8802ab215/",
  },
  { 
    NAME: "Google Scholar",
    HREF: "https://scholar.google.com/citations?user=dOHZdpgAAAAJ&hl=en",
  },
  { 
    NAME: "ORCID",
    HREF: "https://orcid.org/0000-0003-3739-3103",
  }
];
