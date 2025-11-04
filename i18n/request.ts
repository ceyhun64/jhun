import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = "tr"; // Server-side hep TR
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
