//console.log("hey")
var cards = document.querySelectorAll(".cardy");
let i = 0;

let content = [{difficulty: "Medium Twitter", title: "Nov-10th", body : "Good morning! Here's your coding interview problem for today.This problem was asked by Twitter. Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix. For example, given the query string de and the set of strings \[dog, deer, deal\], return \[deer, deal]. Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries."},
               {difficulty : "Medium Stich Fix", title: "Nov-7th" , body : "Good morning! Here's your coding interview problem for today. This problem was asked by Stitch Fix. Pascal's triangle is a triangular array of integers constructed with the following formula: The first row consists of the number 1. For each subsequent row, each element is the sum of the numbers directly above it, on either side. For example, here are the first few rows: 1 1 1 1 2 1 1 3 3 1 1 4 6 4 1 Given an input k, return the kth row of Pascal's triangle. Bonus: Can you do this using only O(k) space?"},
               {difficulty:"Easy IBM" , title : "Nov-5th", body : "Good morning! Here's your coding interview problem for today. This problem was asked by IBM. Given an integer, find the next permutation of it in absolute order. For example, given 48975, the next permutation would be 49578." },            
               {difficulty: "Easy Wayfair", title : "Nov-4th", body : "Good morning! Here's your coding interview problem for today. This problem was asked by Wayfair. You are given a 2 x N board, and instructed to completely cover the board with the following shapes: Dominoes, or 2 x 1 rectangles. Trominoes, or L-shapes. For example, if N = 4, here is one possible configuration, where A is a domino, and B and C are trominoes. A B B C A B C C Given an integer N, determine in how many ways this task is possible."},
               {difficulty: "Medium Google" , title : "Nov-3rd", body : "Good morning! Here's your coding interview problem for today. This problem was asked by Google. Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed). For example, given the string \"()())()\", you should return 1. Given the string \")(\", you should return 2, since we must remove all of them."}]

//cards.forEach(card => { 
//    card.querySelector(".card-title").innerHTML = content[i].title + " " + content[i].difficulty;
//    card.querySelector(".card-img-top").src = `solutions/${content[i].title}/Solution.jpg`;
//    card.querySelector(".card-text").innerHTML = content[i].body.slice(0,75);
//    console.log(i, content[i])
//    i++
//})

function makeVerticalCards(card, selector){
    document.querySelector(selector).innerHTML += 
        `<div class="card cardy m-3 bg-image hover-overlay" style="width: 18rem;">
                  <div class = "imgSize">
                  <img src="solutions/${card.title}/Solution.jpg" class="card-img-top " alt="...">
                  </div>
                <div
                  class="mask"
                  style="
                  background: linear-gradient(
                    45deg,
                    rgba(29, 236, 197, 0.5),
                    rgba(91, 14, 214, 0.5) 100%);">
                </div>
                <div class="card-body">
                  <h5 class="card-title">${card.title}</h5>
                  <p class="card-text">${card.body.slice(0,75)}</p>
                  <a href="#" class="btn btn-dark">See More</a>
                </div>
         </div>`
};

function makeHorizontalCards(card, selector){
    document.querySelector(selector).innerHTML += 
    `<div class="card cardInGrid mb-5 bg-image hover-overlay" style="max-width: 900px;">
    <div class="row g-0">
      <div class="col-md-4 ">
        <img src="solutions/${card.title}/Solution.jpg" class="img-fluid rounded-start" alt="...">
      </div>
      <div
      class="mask"
      style="
      background: linear-gradient(
        45deg,
        rgba(29, 236, 197, 0.5),
        rgba(91, 14, 214, 0.5) 100%
      );"></div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${card.title}</h5>
          <p class="card-text">${card.body}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>`
};

if (document.querySelector(".homePageCards")) {
content.forEach((card)=> {makeVerticalCards(card, ".homePageCards")});}

if (document.querySelector(".cardsHolder")) {
content.forEach((card) => {makeHorizontalCards(card, ".cardsHolder")});
}
