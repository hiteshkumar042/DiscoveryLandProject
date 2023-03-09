window.addEventListener("DOMContentLoaded", function () {
  let heading = document.querySelector(".news-heading");
  let para = document.querySelector(".news-para");

  let back_arrow = document.querySelector("#arrow_back");
  let next_arrow = document.querySelector("#arrow_forward");

  let arr = [
    {
      heading: "Discovery's newest property in Kaua'i North Shore Preserve",
      para: "Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua'i. North Shore Preserve, a one-of- a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.",
    },
    {
      heading: "James Island Discovery's Newest Property",
      para: "Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company's most exclusive community to date and Discovery's first project in Canada.",
    },
    {
      heading: "CostaTerra Discovery's 23rd property",
      para: "Discovery Land Company, the world's leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe.",
    },
    {
      heading: "Troubadour To Open Golf Course Fall 2019",
      para: "Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall.",
    },
  ];

  let counter = 0;
  heading.textContent = arr[counter].heading;
  para.textContent = arr[counter].para;

  next_arrow.addEventListener("click", function () {
    counter++;
    if (counter > arr.length - 1) {
      counter = 0;
      heading.textContent = arr[0].heading;
      para.textContent = arr[0].para;
    } else {
      heading.textContent = arr[counter].heading;
      para.textContent = arr[counter].para;
    }
  });

  back_arrow.addEventListener("click", function () {
    counter--;
    if (counter < 0) {
      counter = arr.length - 1;
      heading.textContent = arr[counter].heading;
      para.textContent = arr[counter].para;
    } else {
      heading.textContent = arr[counter].heading;
      para.textContent = arr[counter].para;
    }
  });
});
