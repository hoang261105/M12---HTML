const onClick = document.querySelector(".button");

let jokes = [
    "All vampires keep their money in a special place—the blood bank.",
    "What do you call someone who can't stick to a diet? A desserter.",
    "I only seem to get sick on weekdays. I must have a weekend immune system.",
    "You can tell it's a dogwood tree from its bark.",
    "What do you call a sheep that knows karate? A lamb chop.",
    "What does a dad get in their stocking if they've been naughty? Char-coal.",
    "Why did the scarecrow win an award? Because he was outstanding in his field",
    "What do you call a cow with no legs? Ground beef.",
    "What has ears but cannot hear? A cornfield!",
    "I don't get why Marvel doesn't use the Hulk to advertise more. He's basically one big Banner.",
  ]

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function getJoke(){
    let random = Math.floor(Math.random() * (jokes.length));
    document.getElementById("display-joke").innerHTML = jokes[random];
    document.body.style.backgroundColor = getRandomColor();
}

onClick.addEventListener("click", getJoke);