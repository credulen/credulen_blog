export const getStrapiURL = (path = "") => {
  return `${
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://strapi-blcj.onrender.com"
  }${path}`;
};

export const getStrapiMedia = (url) => {
  if (url === null) {
    return null;
  }

  // return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // otherwise prepend the URL path with the strapi URL
  return `${getStrapiURL()}${url}`;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};
