const section = (id, title, paragraphs) => ({
  id,
  title,
  content: paragraphs,
});

const store = "New Jet Hardware & Electrical Supplies";
const contact = "jethardware@gmail.com or 0915 746 6128";

export const policies = {
  categories: {
    storePolicies: {
      title: "Store Policies",
      policies: {
      generalPrivacy: {
          title: "Privacy Policy",
          lastUpdated: "18 October 2026",
  sections: [
            section("introduction", "Introduction", [
              `${store} in Danao City, Cebu explains here how this website handles information you choose to send.`,
              "This website does not run an online account system or a payment checkout.",
            ]),
            section("infoCollect", "Information you send", [
              "If you use a contact or quote form, your device opens an email to the store. The message can include your name, phone number, email address, and the materials you ask about.",
              "Calling, texting, or emailing the store shares whatever you include in that message.",
            ]),
            section("disclosure", "Sharing", [
              "The store uses inquiry details to answer questions about stock, delivery, pipe threading, and gutter bending.",
              "Details are not sold. They may be shared if a law requires it.",
            ]),
            section("security", "Security", [
              "Email and phone messages travel through your own provider. Do not send card numbers or passwords through the website form.",
            ]),
            section("rights", "Questions", [
              `To ask about a message you sent, contact ${contact}.`,
            ]),
          ],
},
      cookiePolicy: {
  title: "Cookie Policy",
          lastUpdated: "18 October 2026",
  sections: [
            section("whatAreCookies", "What this site stores", [
              "This website does not run an advertising network or a checkout.",
              "Your browser may keep ordinary technical data needed to load the pages.",
            ]),
            section("choices", "Your choices", [
              "You can clear site data from your browser settings.",
            ]),
          ],
        },
        termsGeneral: {
          title: "Terms & Conditions",
          lastUpdated: "18 October 2026",
  sections: [
            section("introduction", "Using this website", [
              `This website describes ${store}, a hardware and electrical supplies store at the corner of Pio del Pilar and Severo Duterte Streets, Poblacion, Danao City, Cebu 6004.`,
              "Product availability, prices, and delivery timing are confirmed by the store. A page on this website is not a confirmed quotation.",
            ]),
            section("hours", "Hours and visits", [
              "Published hours are Monday to Saturday, 7:00 AM to 6:00 PM, and Sunday, 7:00 AM to 5:00 PM. Holiday closures are announced by the store, including on its Facebook page.",
            ]),
            section("law", "Local law", [
              "Questions about a purchase are handled with the store in Danao City, Cebu, Philippines.",
            ]),
          ],
        },
        returns: {
          title: "Orders & Returns",
          lastUpdated: "18 October 2026",
  sections: [
            section("orders", "Orders", [
              "Ask the counter to confirm stock, price, and whether delivery, pipe threading, or gutter bending is available for your job.",
              "This website does not take card payments.",
            ]),
            section("returns", "Returns", [
              "Return of goods is decided at the store. Bring the item and your receipt and speak with the counter before assuming a return is accepted.",
            ]),
          ],
},
codeOfConduct: {
          title: "Store Conduct",
          lastUpdated: "18 October 2026",
  sections: [
            section("counter", "At the counter", [
              "Customers and staff are expected to treat one another respectfully inside the store and when arranging a delivery.",
            ]),
          ],
        },
      },
    },
  },
};
