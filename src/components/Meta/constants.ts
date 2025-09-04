import { officeAddress, phoneNumber } from "../../constants";

export const structuredJSON = {
  "@context": "http://schema.org",
  url: "https://kancelaria-restrukturyzacje.pl/",
  "@type": "WebPage",
  name: "Kancelaria Restrukturyzacje i Upadłości",
  description:
    "Świadczymy kompleksową pomoc prawną w postępowaniach restrukturyzacyjnych i upadłościowych.",
  telephone: phoneNumber,
  image: `https://kancelaria-restrukturyzacje.pl/images/Wiktoria-Danowska.webp`,
};

export const organizationJSON = {
  "@context": "http://schema.org",
  "@type": "LegalService",
  name: "Kancelaria Restrukturyzacje i Upadłości",
  url: "https://kancelaria-restrukturyzacje.pl/",
  telephone: phoneNumber,
  address: {
    "@type": "PostalAddress",
    streetAddress: officeAddress.streetAddress,
    postalCode: officeAddress.postalCode,
    addressLocality: officeAddress.addressLocality,
    addressCountry: officeAddress.addressCountry,
  },
};
