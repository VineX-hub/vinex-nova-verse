// External links configuration for VineX platform sections
// Update these URLs when the external sites are ready

export const EXTERNAL_LINKS = {
  novels: "", // VineNovels site URL
  inspire: "", // VineInspire site URL  
  learn: "", // VineLearn site URL
} as const;

// Helper function to check if a link is available
export const isLinkAvailable = (key: keyof typeof EXTERNAL_LINKS): boolean => {
  return EXTERNAL_LINKS[key] !== "";
};

// Helper function to get link or fallback
export const getLink = (key: keyof typeof EXTERNAL_LINKS): string => {
  return EXTERNAL_LINKS[key] || "#";
};