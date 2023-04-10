const main = document.querySelector('main');

const joke1 = "Why do oranges wear sunscreen? So they don't peel.";
const joke2 = "What happens when a strawberry gets run over crossing the street? Traffic jam.";
const joke3 = "Why does Humpty Dumpty love autumn? Because he had a great fall.";

const template = `
    <h1>My Jokes</h1>
    <ul>
        <li>${joke1}</li>
        <li>${joke2}</li>
        <li>${joke3}</li>
    </ul>
`;
main.innerHTML = template;

const p = document.createElement('p');
p.textContent = "That's all folks!";
document.querySelector('body').appendChild(p);

