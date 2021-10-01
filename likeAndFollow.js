(async function likeAndFollow(link, browser){
    let ntab = await browser.newPage();
    await ntab.goto(link);
    let tabArr = await browser.pages();
    let page = tabArr[tabArr.length-1];


})();

module.exports={
    fn: likeAndFollow
}