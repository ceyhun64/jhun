import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// --- DESTEKLENEN DİLLER ---
const locales = ["en", "tr"];

export default getRequestConfig(async ({ locale }) => {

  if (!locale) {
    notFound();
  }
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale: locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
