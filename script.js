var cards = document.querySelectorAll(".cardy");
let windowIsMobile = false;


let content = [
               {difficulty: "Easy from Slack", title: "Nov-13th", body : "Good morning! Here's your coding interview problem for today. This problem was asked by Slack. You are given a string formed by concatenating several words corresponding to the integers zero through nine and then anagramming. For example, the input could be 'niesevehrtfeev', which is an anagram of 'threefiveseven'. Note that there can be multiple instances of each integer. Given this string, return the original integers in sorted order. In the example above, this would be 357."},
               {difficulty: "Medium from Google", title: "Nov-12th", body : "Good morning! Here's your coding interview problem for today. This problem was asked by Google. Given a stack of N elements, interleave the first half of the stack with the second half reversed using only one other queue. This should be done in-place. Recall that you can only push or pop from a stack, and enqueue or dequeue from a queue. For example, if the stack is [1, 2, 3, 4, 5], it should become [1, 5, 2, 4, 3]. If the stack is [1, 2, 3, 4], it should become [1, 4, 2, 3]. Hint: Try working backwards from the end state."},
               {difficulty: "Easy from Amazon", title: "Nov-11th", body : "Good morning! Here's your coding interview problem for today.This problem was asked by Amazon. You are given a list of data entries that represent entries and exits of groups of people into a building. An entry looks like this: \{\"timestamp\": 1526579928, count\: 3, \"type\": \"enter\"\} This means 3 people entered the building. An exit looks like this: \{\"timestamp\": 1526580382, count: 2, \"type\": \"exit\"\} This means that 2 people exited the building. timestamp is in Unix time. Find the busiest period in the building, that is, the time with the most people in the building. Return it as a pair of (start, end) timestamps. You can assume the building always starts off and ends up empty, i.e. with 0 people inside."},
               {difficulty: "Medium from Twitter", title: "Nov-10th", body : "Good morning! Here's your coding interview problem for today.This problem was asked by Twitter. Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix. For example, given the query string de and the set of strings \[dog, deer, deal\], return \[deer, deal]. Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries."},
               {difficulty : "Medium from Stich Fix", title: "Nov-7th" , body : "Good morning! Here's your coding interview problem for today. This problem was asked by Stitch Fix. Pascal's triangle is a triangular array of integers constructed with the following formula: The first row consists of the number 1. For each subsequent row, each element is the sum of the numbers directly above it, on either side. For example, here are the first few rows: 1 1 1 1 2 1 1 3 3 1 1 4 6 4 1 Given an input k, return the kth row of Pascal's triangle. Bonus: Can you do this using only O(k) space?"},
               {difficulty:"Easy from IBM" , title : "Nov-5th", body : "Good morning! Here's your coding interview problem for today. This problem was asked by IBM. Given an integer, find the next permutation of it in absolute order. For example, given 48975, the next permutation would be 49578." },            
               {difficulty: "Easy from Wayfair", title : "Nov-4th", body : "Good morning! Here's your coding interview problem for today. This problem was asked by Wayfair. You are given a 2 x N board, and instructed to completely cover the board with the following shapes: Dominoes, or 2 x 1 rectangles. Trominoes, or L-shapes. For example, if N = 4, here is one possible configuration, where A is a domino, and B and C are trominoes. A B B C A B C C Given an integer N, determine in how many ways this task is possible."},
               {difficulty: "Medium from Google" , title : "Nov-3rd", body : "Good morning! Here's your coding interview problem for today. This problem was asked by Google. Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed). For example, given the string \"()())()\", you should return 1. Given the string \")(\", you should return 2, since we must remove all of them."}]

let portfolio = [
              {difficulty: "" , title: "Super Future Fitness", body : "Here is a wordpress website with some custom alterations I made for a fitness center. Web site is designed to share information on the gym both static and dynamic. Dynamic content includes current promotions and facility class schedule utilizing an API and Iframe."}
]


function makeCarosel(content, selector) { 
  document.querySelector(selector).innerHTML = `
<div id="carouselExampleCaptions" class="carousel slide  m-2" data-bs-ride="carousel">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active" id="0">
    <img src="solutions/${content[0].title}/Solution.jpg" class="content d-block w-100" id="0" alt="...">
    <div class="carousel-caption d-md-block">
      <h5 id="0" class= "content">${content[0].title}</h5>
      <p id="0" class= "content">This problem is ${content[0].difficulty}</p>
    </div>
  </div>
  <div class="carousel-item" id="1">
    <img id="1" src="solutions/${content[1].title}/Solution.jpg" class="content d-block w-100" alt="...">
    <div class="carousel-caption d-md-block">
      <h5 id="1" class= "content">${content[1].title}</h5>
      <p id="1">This problem is ${content[1].difficulty}</p>
    </div>
  </div>
  <div class="carousel-item" id="2">
    <img id="2" src="solutions/${content[2].title}/Solution.jpg" class="content d-block w-100" alt="...">
    <div class="carousel-caption">
      <h5 id="2" class= "content">${content[2].title}</h5>
      <p id="2" class= "content">This problem is ${content[2].difficulty}</p>
    </div>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>`
var carouselPages = document.querySelectorAll(".carousel-item");
carouselPages.forEach((page) => {page.addEventListener("click", createCardPage)});
}

function makeVerticalCards(card, selector, index, array){
    document.querySelector(selector).innerHTML += 
        `<div class="card vertCardClick cardy m-2 bg-image hover-overlay" style="width: 18rem;">
                  <div class = "imgSize">
                  <img src="solutions/${card.title}/Solution.jpg" class="card-img-top " alt="...">
                  </div>
                <div
                  class="${array} mask" id="${index}"
                  style="
                  background: linear-gradient(
                    45deg,
                    rgba(29, 236, 197, 0.5),
                    rgba(91, 14, 214, 0.5) 100%);">
                </div>
                <div class="card-body">
                
                  <h5 class="card-title">${card.title} ${card.difficulty}</h5>
                  <p class="card-text">${card.body.slice(0,75)}</p>
                  <a href="#" class="btn btn-dark">See More</a>
                </div>
         </div>`
};

function makeHorizontalCards(card, selector, index, array){
    document.querySelector(selector).innerHTML += 
    `<div class="card horzCardClick cardInGrid mb-5 bg-image hover-overlay" style="max-width: 1400px;">
    <div class="row g-0">
      <div class="col-md-3 ">
        <img src="solutions/${card.title}/Solution.jpg" class="img-fluid imgSize rounded-start" alt="...">
      </div>
      <div
      class="${array} mask" id="${index}"
      style="
      background: linear-gradient(
        45deg,
        rgba(29, 236, 197, 0.5),
        rgba(91, 14, 214, 0.5) 100%
      );"></div>
      <div class="col-md-8">
        <div class="card-body">
        
          <h5 class="h2 card-title">${card.title}  ${card.difficulty}</h5>
          <p class="card-text">${card.body}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>`
};

function createCardPage (e) {
  let x = e.target.id;
  console.log(x)
  let y = e.target.className;
  if(y.includes("content")) {y = content}; 
  if(y.includes("portfolio")) {y = portfolio};
  let currentLocation = window.location.pathname;
  

 document.querySelector(".pageContent").innerHTML = 
  `<div class ="container mt-3">
  <a href ="${currentLocation}" class = "m-3"> < [Go Back] </a>
  <div class = "container cardInGrid style="max-width: 1400px;"">
  <h1 class = 'display-4'>${y[x].title} ${y[x].difficulty}</h1>
  <div class = "mt-3">${y[x].body}</div>
  <img src = "solutions/${y[x].title}/Solution.jpg" class = "responsive mt-4">
  </div></div>`;
  window.scrollTo(0, 0);
}

function resizer() {
  if(window.innerWidth < 770 ) {
    makeCarosel(content, ".homePageCards")
    i = 0
    document.querySelector('.portfolioCards').innerHTML = "";
    portfolio.forEach((card, index) => {if(i<4) {makeVerticalCards(card, ".portfolioCards", index, "portfolio")} i++ })
  }else{ i = 0;
   document.querySelector('.homePageCards').innerHTML = "";
   content.forEach((card, index)=> {if(i<4) {makeVerticalCards(card, ".homePageCards", index, "content")} i++ })
   i = 0;
   ;
  }}

if (document.querySelector(".homePageCards") && window.innerWidth >= 770) {
  window.addEventListener("resize", resizer)
  let i = 0;
  content.forEach((card, index)=> {if(i<4) {makeVerticalCards(card, ".homePageCards", index, "content")} i++ });
  i = 0;
  portfolio.forEach((card, index) => {if(i<4) {makeVerticalCards(card, ".portfolioCards", index, "portfolio")} i++ });
  var vertCards = document.querySelectorAll(".vertCardClick");
  vertCards.forEach((card) => {card.addEventListener("click", createCardPage)});
  } 
  else if(document.querySelector(".homePageCards")) {
  window.addEventListener("resize", resizer)
  makeCarosel(content, ".homePageCards")
  i = 0;
  document.querySelector('.portfolioCards').innerHTML = "";
  portfolio.forEach((card, index) => {if(i<4) {makeVerticalCards(card, ".portfolioCards", index, "portfolio")} i++ });}

if (document.querySelector(".dcpcards" )) {
  content.forEach((card, index) => {makeHorizontalCards(card, ".cardsHolder", index, "content")});
  var horzCards = document.querySelectorAll(".horzCardClick");
  horzCards.forEach((card) => {card.addEventListener("click", createCardPage)})
  } 




