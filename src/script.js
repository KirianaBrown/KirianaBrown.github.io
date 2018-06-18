// 1. List Array of Responses
// 2. Random Number Generator
// 3. Random Number generated = index of List
// 4. Validation to check if question
// 4. Render to HTML <p>

function magic8Ball() {
  let responses = [
    "Signs point to yes",
    "Don't count on it",
    "Without a doubt",
    "Ask again later",
    "As I see it, Yes",
    "My sources say no"
  ];

  let randomNumber = (Math.floor(Math.random()*6));
  console.log(responses)
  console.log(randomNumber)

  let responseResult = responses[randomNumber];
  console.log(responseResult)

  const userInput = document.getElementById('userInput')
  if ( userInput.value === ""){
    document.getElementById('response').innerHTML = "Please Ask a Question"
  }
  else {
    document.getElementById('response').innerHTML = responseResult
  }

}
