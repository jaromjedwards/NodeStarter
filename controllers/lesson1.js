const magdeleneRoute = (req, res) => {
    res.send('Magdelene Edwards');
}

const jaromRoute = (req, res) => {
    res.send('Jarom Edwards');
};

const kaylaRoute = (req, res) => {
    res.send('Kayla Edwards');
};

module.exports = {
    kaylaRoute,
    jaromRoute,
    magdeleneRoute
};