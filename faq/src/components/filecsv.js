const csvData = `1;1. Pirate Ipsum;Arrr me hearties! Make traditional Latin walk the plank and opt for m for your next high seas design adventure.
2;2. Cupcake Ipsum;Satisfy your clients sugar cravings with Cupcake Ipsum. Pretty sweet right?
3;3. Cheese Ipsum;More of a savory fan? Get extra cheesy with this dairy-heavy generator.
4;4. Fillerama;Good news everyone! With placeholder text from shoFillerama is the perfect Lorem Ipsum for the TV lover in all of us.
5;5. Hipsum;Good news everyone! With placeholder text from shows like Futurama, Doctor Who, Dexter, and Mo
6;6. Office Ipsum;More of a savory fan? Get extra cheesy with this dairy-heavy generator.
7;7. Sagan Ipsum; Doctor Who, Dexter, and Monty Python, Fillerama is the perfect Lorem Ipsum for the TV lover in all of us.
8;8. Zombie Ipsum;A blue collar lorem ipsum generator for when you need to impress the C-Suite.
9;9. Cat Ipsum;With placeholder text comprised of Carl Sagan quotes, your design mockups will be out of this world.
10;10. Bluth Ipsum;have your cat-loving clients purring their appreciation for your mock-ups in no time.
11;11. Ancient Alien Ipsum;The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It�ll
12;12. Legal Ipsum;Lean into pop culture with this collection of Arrested Development quotes.
13;13. Lit Ipsum;For those with a flair for conspiracy, this Ancient Aliens generator will add some otherworldly color.
14;14. Monocle Ipsum;This generator is about as readable as any terms and conditions page.
15;15. Online Dating Ipsum;For the literary-minded among us, Lit Ipsum pulls in excerpts from classical works of fiction.
16;16. Ostreghetta;conspiracy, this Ancient Aliens generator will add some otherworldly color.
17;17. Acciderbolina;Get fancy with Monocle Ipsum. Tophat not required.
18;18. Perdincidunque;If online dating has made you a bit cynical, this is the lorem ipsum generator for you.
19;19. Esticassi;For those with a flair for conspiracy, this Ancient Aliens generator will add some otherworldly color.
20;20. Masticassi;Get fancy with Monocle Ipsum. Tophat not required.`;

export const jsonText = csvData.split("\n").map((line, index) => {
  const [id, title, text] = line.split(";");
  return { id, title, text };
});

// Stampa il risultato
console.log(jsonText);
