const categoryNumber = document.querySelector("#categories");
const categoryLength = categoryNumber.querySelectorAll("li.item");
const number = categoryLength.length;
console.log("Number of categories:", number);

const categoryDetailList = function (listDetails) {
  for (let i = 0; i < listDetails.length; i++) {
    console.log("Category:", listDetails[i].firstElementChild.textContent);
    const categoryElements = listDetails[i].querySelectorAll("ul");
    for (let j = 0; j < categoryElements.length; j++) {
      console.log("Elements:", categoryElements[j].children.length);
    }
  }
};

categoryDetailList(categoryLength);
