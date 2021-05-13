/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//instantiate array of quotes
console.log("connected");
let quotes = [
    {
      quote : "We May Encounter Many Defeats But We Must Not Be Defeated.",
      source : "– Maya Angelou"
     
    },{
      quote : "We Generate Fears While We Sit. We Overcome Them By Action.",
      source : "– Dr. Henry Link"
      
    },{
      quote : "When you reach the end of your rope, tie a knot in it and hang on.",
      source : "-Franklin D. Roosevelt"
      
    },{
      quote : "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      source : "-Ralph Waldo Emerson,"
      
    },{
      quote : "Life is a succession of lessons which must be lived to be understood.",
      source : "-Ralph Waldo Emerson"
      
    },{
      quote :  "The greatest glory in living lies not in never falling, but in rising every time we fall." ,
      source : "-Nelson Mandela"
      
    },
  ]
  
  // testing console.log(quotes[1].quote);
  
  /***
   * `getRandomQuote` function
  ***/
  function getRandomQuote(){
    //gets random number and uses it to return a random quote at that index.
    let random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
  }
  
  
  //testing console.log(getRandomQuote());
  
  /***
   * `printQuote` function
  ***/
  function printQuote(){
    //sets variable for the quote
    let theQuote = getRandomQuote();
    //instantiates variable for the html code to be inserted into document.
    let htmlSnip = `<p class="quote"> ${theQuote.quote} </p> \n <p class="source"> ${theQuote.source} `;
    //if statements check if citation and year have a value.
    
    
    htmlSnip += `</p>`;
    document.getElementById('quote-box').innerHTML = htmlSnip; 
  }
  
  
  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW!!
  ***/
  
  document.getElementById('load-quote').addEventListener("click", printQuote, false);