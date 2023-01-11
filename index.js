// Iteration 1: Names and Input

const hacker1 = "Borja";
    console.log ("The driver's name is " + hacker1);
const hacker2 = "Luis";
    console.log ("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}
 else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters");
}
 else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops

for (const value of hacker1) {
    console.log(value.toUpperCase());
  }
  
const ReverseString = hacker2 => [...hacker2].reverse().join(''); 
    console.log(ReverseString(hacker2));
  
const comparison = hacker1.localeCompare(hacker2);
  
if (hacker1 < hacker2) {
      console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
      console.log("Yo, the navigator goes first definitely.");
} else {
      console.log("What?! You both have the same name?");
  }

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed sapien non lectus sagittis blandit et eget turpis. Cras egestas a augue et imperdiet. Aliquam fermentum mi ac augue placerat, vehicula imperdiet dolor ultrices. Mauris nec maximus enim. Donec tincidunt felis ac massa varius, et mattis elit lacinia. Donec sagittis turpis ac tellus iaculis, sit amet dapibus magna mattis. Nulla facilisi. Etiam sit amet libero vitae ex lacinia tempus. Sed viverra mattis tortor, eget blandit tellus faucibus eu. Nullam posuere turpis id felis sollicitudin dignissim. Pellentesque malesuada ut enim sed rhoncus. Quisque id consectetur dolor, venenatis egestas diam. Praesent dui enim, pulvinar quis lectus et, ultricies blandit lectus. Maecenas justo libero, ultrices sit amet nunc in, luctus gravida metus. In maximus ligula non viverra lacinia. Mauris ullamcorper ipsum non sem eleifend, sit amet fermentum ipsum pretium.
Nunc id porta neque. Sed id nulla pellentesque, pretium sem eu, pulvinar elit. In fermentum ante ultrices, pretium orci vitae, euismod elit. Donec interdum quam at congue dignissim. Mauris semper odio ullamcorper sapien interdum semper. Curabitur dignissim erat vel risus facilisis faucibus. Duis mollis et risus a feugiat. Sed eget tincidunt mauris, id pulvinar felis. Donec pharetra facilisis lacus sit amet ullamcorper. Cras sem sapien, pharetra sit amet sapien vitae, pretium porta diam. Pellentesque pellentesque libero at sodales vulputate.
Sed quis laoreet mi, in facilisis velit. Aliquam at odio nec lectus elementum laoreet. Fusce eu magna nec magna congue ultricies volutpat ut orci. Cras condimentum tortor elit, et lobortis nibh gravida quis. Vivamus non sodales metus, aliquet auctor nisi. In mattis volutpat orci, sit amet blandit turpis viverra id. Duis porttitor ornare nisl, quis vehicula ante condimentum a.`;

// const shortened = longText.slice(0, 10); --> not necessary, I guess.
// console.log(shortened); --> not necessary, I guess.

const wordArray = longText.split(" ");
const numWords = wordArray.length;
console.log("Number of words: ", numWords);
