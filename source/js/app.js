let $ = document;
let listDom = $.querySelector("#list");
let pagination = $.querySelector("#pagination");
let listData = [
  { id: 1, name: "ali Rahmani" },
  { id: 2, name: "alireza Rahmani" },
  { id: 3, name: "ahmad Rahmani" },
  { id: 4, name: "mahdi Rahmani" },
  { id: 5, name: "sara Rahmani" },
  { id: 6, name: "mina Rahmani" },
  { id: 7, name: "setare Rahmani" },
  { id: 8, name: "mona Rahmani" },
  { id: 9, name: "yas Rahmani" },
  { id: 10, name: "hamid Rahmani" },
];

let pageNumber, row;

divideArray(1, 5);

function divideArray(pageNumber, row) {
  // var result = listData.splice(
  //   pageNumber * Math.ceil(listData.length / row) -
  //     Math.ceil(listData.length / row),
  //   Math.ceil(listData.length / row)
  // );
  //because listData.splice remove some element and change the initial listData ,I decided to use  listData.slice instead inorder to prevent errors
  var result = listData.slice(
    pageNumber * Math.ceil(listData.length / row) -
      Math.ceil(listData.length / row),
    pageNumber * Math.ceil(listData.length / row)
  );

  console.log(
    pageNumber * Math.ceil(listData.length / row) -
      Math.ceil(listData.length / row),
    pageNumber * Math.ceil(listData.length / row),
    listData
  );

  result.forEach(function (item) {
    let listElement = $.createElement("div");
    listElement.setAttribute("class", "item");
    listElement.innerHTML = item.name;
    listDom.append(listElement);
  });
  //I don't know why this part of code doesn't work !
  // for (var i = 0; i > 3; i++) {
  //   console.log("yes");
  //   console.log(row);
  // }
  let btnArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let btnNumber = btnArray.slice(0, row);
  // console.log(btnNumber);
  btnNumber.forEach(function (item) {
    let btnElem = $.createElement("button");
    btnElem.innerHTML = item;

    btnElem.addEventListener("click", function (event) {
      listDom.innerHTML = "";
      pagination.innerHTML = "";
      // console.log(event.target.innerHTML);
      divideArray(event.target.innerHTML, row);
    });
    pagination.append(btnElem);
  });
}
