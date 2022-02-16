const quotes = [
    'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
    'The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt',
    'When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt',
    'Whoever is happy will make others happy too. -Anne Frank',
    'Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson'
];

function randomQuote() {
    const randNum = Math.floor(Math.random() * 5);
    return quotes[randNum];
}

module.exports = {
    quotes, randomQuote
};