let blogEntries = [
  {
    title: "Thankyou to Everyone",
    date: "Sept 2024",
    info: "Alice, the glass bottomed boat, is out on hardstanding undergoing repairs to be ready for the 2025 season. We wish all of our customers, both past and present, and those we've not had the pleasure to meet yet, a very Merry Christmas and a Happy New Year. From all of the team here in Gairloch \n Michael, Julie and Steve.",
    url: "https://www.glassbottomedboat.co.uk/blog",
  },
  {
    title: "Kraken has been Spotted",
    date: "June 2024",
    info: "Skipper Mike unfortunately diagnosed with stupidity syndrome. He is now the only person we know that has been bitten by an Octopus in Gairloch. It was like the kraken, he said!",
    url: "https://www.glassbottomedboat.co.uk/blog",
  },
  {
    title: "He's gone and Crashed",
    date: "May 2024",
    info: "Unfortunately Mike has crashed and hereby has been given the nickname Captain Pugwash! The boat only travels at 4knots how can a person at that speed crash?",
    url: "https://www.glassbottomedboat.co.uk/blog",
  },
  {
    title: "Welcome Mike",
    date: "April 2024",
    info: "Mike has now joined the business. Originally from Warwickshire, he has moved with his family to Aultbea recently and will be acting as our Relief-Skipper. We all wish Mike good luck in his new Role.",
    url: "https://www.glassbottomedboat.co.uk/blog",
  },
];

const container = document.querySelector(".blog-div");

blogEntries.forEach((post) => {
  const postElement = document.createElement("div");
  postElement.classList.add("blogEntryDiv");

  const titleElement = document.createElement("h3");
  titleElement.classList.add("blogEntryHeading");
  titleElement.textContent = post.title;
  postElement.appendChild(titleElement);

  const dateElement = document.createElement("p");
  dateElement.classList.add("BlogEntryDate");
  dateElement.textContent = post.date;
  postElement.appendChild(dateElement);

  const infoElement = document.createElement("p");
  infoElement.classList.add("blogEntryInfo");
  infoElement.textContent = post.info;
  postElement.appendChild(infoElement);

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("blogEntryButton");

  const linkElement = document.createElement("a");
  linkElement.href = post.url; // Assuming each post object has a 'url' property
  linkElement.textContent = "Read More";
  linkElement.setAttribute("aria-label", `Read more about ${post.title}`);
  buttonElement.appendChild(linkElement);

  postElement.appendChild(buttonElement);

  container.appendChild(postElement);
});
