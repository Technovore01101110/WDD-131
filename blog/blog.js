
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		dateClass: 'date',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgClass: 'imageContainer',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		infoClass: 'info',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		dateClass: 'date',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgClass: 'imageContainer',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		infoClass: 'info',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		dateClass: 'date',
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his \"Aunt Pol\" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgClass: 'imageContainer',
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		infoClass: 'info',
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

function htmlRender(article) {
	let section = document.querySelector('.results');
	let template =	`<article id='${article.id}'>
                <aside class=${article.infoClass}>
                    <p class=${article.dateClass}>${article.date}</p>
                    <p>${article.ages}</p>
                    <p>${article.genre}</p>
                    <p>${article.stars}</p>
                </aside>
                <div>
                    <h2>${article.title}</h2>
                    <div class=${article.imgClass}>
                        <img src=${article.imgSrc} alt=${article.imgAlt}>
                    </div>
                    <p>
						${article.description} <a href="">Read more...</a>
                    </p>
                </div>
            </article>`;
	section.innerHTML += template;
}			

function articleHandler(){
	const results = articles.forEach(htmlRender);
}

articleHandler();