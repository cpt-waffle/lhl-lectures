const express = require('express');
const router = express.Router();

const data = [
	{name: 'Waffle', url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-10/19/16/asset/buzzfeed-prod-web-02/sub-buzz-21568-1539979871-1.jpg'},
	{name: 'Doug', url: 'https://pbs.twimg.com/profile_images/932073327400644609/Sez347VL.jpg'},
	{name: 'Luna', url: 'https://i.pinimg.com/originals/d5/fa/0b/d5fa0b05e00505717d21c532b043f586.jpg'},
	{name: 'MoonMoon', url: 'https://images-cdn.9gag.com/images/thumbnail-facebook/9155182_1388247030.7007_yqylen_n.jpg'},
]

module.exports = () => {
    router.get('/', (req, res) => {
        res.json(data);
    })


    return router;
}