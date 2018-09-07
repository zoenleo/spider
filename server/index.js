const cheerio = require('cheerio');

const Spider = require('./spider'); 

const feijianwendao = new Spider({
    url: 'http://m.56shuku.org/files/article/html/33/33648_1/',
    sleep: 10000
});


feijianwendao.start((body) => {
    const $ = cheerio.load(body);
    const $lis = $($('.chapter')[1]).children();
    $lis.each((index, li) => {
        const $a = $(li).children();
        console.log($a.attr('href'), $a.text());
    });
});