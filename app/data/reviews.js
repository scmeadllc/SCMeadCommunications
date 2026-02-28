// app/data/reviews.js

export const allReviews = [
  {
    id: "yelp-brett-m-2026-02-27",
    name: "Brett M.",
    city: "Beresford Park, San Mateo, CA",
    source: "Yelp",
    rating: 5,
    date: "2026-02-27",
    text:
      "I needed an access point installed in our house that had an addition. I was able to do most of the Ethernet cables in the house but due to the addition I was not able to get the Ethernet cables into the newer part of the house. I had posted in the Lemon Valley community on Facebook but got some completely ridiculous replies. Shane said he would like to come take a look and provide a quote. Shane arrived on time, quoted the job and explained his experience. After talking with him I also had him relocate some items that Spectrum said could not be moved. Shane's work was fantastic. He was able to run the Ethernet cables, mounted the access point and was able to relocate the Spectrum boxes in a hall closet. Shane was very professional and his quoted price was the final price. I highly recommend Shane and will use him for future work!",
  },

  // Angi reviews
  {
    id: "angi-robert-e",
    source: "Angi",
    name: "Robert E.",
    city: "Sparks, NV",
    rating: 5,
    date: "",
    text:
      "Shane did a great job. I had him extend my network in my home. He was professional and considerate while completing the work.",
  },
  {
    id: "angi-ruell-m",
    source: "Angi",
    name: "Ruell M.",
    city: "Sparks, NV",
    rating: 5,
    date: "",
    text: "Shane is excellent, prompt, professional and great quality.",
  },
  {
    id: "angi-joe-c",
    source: "Angi",
    name: "Joe C.",
    city: "Reno, NV",
    rating: 5,
    date: "",
    text:
      "Quick, friendly. Helped with an additional issue and it made a huge difference! Would recommend!!",
  },
  {
    id: "angi-lonnie-r",
    source: "Angi",
    name: "Lonnie R.",
    city: "Sparks, NV",
    rating: 5,
    date: "",
    text: "He got the job without calling people.",
  },
  {
    id: "angi-grant-s",
    source: "Angi",
    name: "Grant S.",
    city: "Sparks, NV",
    rating: 5,
    date: "",
    text: "Good work and efficient.",
  },
  {
    id: "angi-rafael-p",
    source: "Angi",
    name: "Rafael P.",
    city: "Reno, NV",
    rating: 5,
    date: "",
    text: "Did a great job. Awesome work, would highly recommend.",
  },
  {
    id: "angi-jody-g",
    source: "Angi",
    name: "Jody G.",
    city: "Reno, NV",
    rating: 5,
    date: "",
    text:
      "Shane did a fantastic job hanging many TVs and the associated sound bars throughout our new home. He is very professional and highly conscientious of the placement aesthetics including articulation, balance, and hiding wires. He answered all our questions and cleaned up as if he was never here.",
  },
  {
    id: "angi-brent-r",
    source: "Angi",
    name: "Brent R.",
    city: "Reno, NV",
    rating: 5,
    date: "",
    text:
      "Provided the services as they were originally discussed. Arrived promptly and was very professional and courteous.",
  },
  {
    id: "angi-steve-a",
    source: "Angi",
    name: "Steve A.",
    city: "Reno, NV",
    rating: 5,
    date: "",
    text: "They did a great job! Highly recommend them!!!",
  },
  {
    id: "angi-jerry-h",
    source: "Angi",
    name: "Jerry H.",
    city: "Reno, NV",
    rating: 5,
    date: "",
    text:
      "Shane is knowledgeable and professional. He came by to assess the work beforehand, was punctual, and very clear about his estimated costs.",
  },

  // Google reviews
  {
    id: "google-paige-b",
    source: "Google",
    name: "Paige B.",
    city: "Reno, NV",
    rating: 5,
    date: "",
    text:
      "Highly recommend! Sean did a great job for us. He was fast, efficient, and insisted on cleaning up all the mess left behind from running lines. Very happy we found him.",
  },
  {
    id: "google-munro-bonnell",
    source: "Google",
    name: "Munro M. Bonnell",
    city: "Reno, NV",
    rating: 5,
    date: "",
    text:
      "Shane’s services were top notch! He assessed my network, gave me options, completed the work cleanly, communicated throughout, and verified full functionality. His installation of Ethernet wall plugs was super clean and professional. I highly recommend him!",
  },
];

// Homepage uses `reviews` — keep it as the “top 5” list.
export const reviews = allReviews.slice(0, 5);
