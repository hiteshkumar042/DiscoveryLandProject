let left = document.querySelector(".left");
let right = document.querySelector(".right");

let tempdata = document.querySelector(".sun-icon");
let windData = document.querySelector(".wind-icon");
let directionData = document.querySelector(".direction");

let title = document.querySelector(".title");
let desc = document.querySelector(".desc");

let latitude = document.querySelector(".latitude");

let arr = [
  {
    tempdata: "78 Degree",
    windData: "10.7 Mph Wind",
    direction: "88 Degree",
    title: "Lake Tahoe, California",
    desc: "Homewood Mountain & Lake Club",
    latitude: "39.08629948516978 N/-120.1605391",
  },
  {
    tempdata: "51 Degree",
    windData: "0 Mph Wind",
    direction: "0",
    title: "Silicon Valley, California",
    desc: "Corde Valle",
    latitude: "37.067811 N /-121.632827",
  },
  {
    tempdata: "63 Degree",
    windData: "3 Mph Wind",
    direction: "0",
    title: "La Quinta, California",
    desc: "Madison",
    latitude: "33.660962 N /-116.244456",
  },
];

tempdata.textContent = arr[0].tempdata;
windData.textContent = arr[0].windData;
directionData.textContent = arr[0].direction;
title.textContent = arr[0].title;
desc.textContent = arr[0].desc;
latitude.textContent = arr[0].latitude;

left.addEventListener("click", function () {
  counter--;
  if(counter<0){
    counter=arr.length-1;
    tempdata.textContent = arr[counter].tempdata;
    windData.textContent = arr[counter].windData;
    directionData.textContent = arr[counter].direction;
    title.textContent = arr[counter].title;
    desc.textContent = arr[counter].desc;
    latitude.textContent = arr[counter].latitude;
  }
  else{
    tempdata.textContent = arr[counter].tempdata;
    windData.textContent = arr[counter].windData;
    directionData.textContent = arr[counter].direction;
    title.textContent = arr[counter].title;
    desc.textContent = arr[counter].desc;
    latitude.textContent = arr[counter].latitude;
  }
});
let counter = 0;
right.addEventListener("click", function () {
  counter++;
  if (counter > arr.length - 1) {
    counter = 0;
    tempdata.textContent = arr[0].tempdata;
    windData.textContent = arr[0].windData;
    directionData.textContent = arr[0].direction;
    title.textContent = arr[0].title;
    desc.textContent = arr[0].desc;
    latitude.textContent = arr[0].latitude;
  } else {
    tempdata.textContent = arr[counter].tempdata;
    windData.textContent = arr[counter].windData;
    directionData.textContent = arr[counter].direction;
    title.textContent = arr[counter].title;
    desc.textContent = arr[counter].desc;
    latitude.textContent = arr[counter].latitude;
  }
});
