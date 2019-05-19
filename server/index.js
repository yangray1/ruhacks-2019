const express = require("express");
const bodyParser = require("body-parser");

const request = require('request-promise');


const app = express();
const port = 5000;
const productStoreUrl = "http://product-open-data.com";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello world");
});


// Product metadata retrieval from GTIN code

app.get("/api/product/:gtin", (req, res) => {
    // const gtin = req.params.gtin;

	const gtin = "0068274000218";
    const url = productStoreUrl + `/api/gtin/${gtin}/?format=json`;

    request({
        uri: url,
        simple: true
    }).then((extRes) => {
	    console.log({productDB: extRes});
		res.json({error: null, data: extRes});
    }).catch((err) => {
        res.json({error: err, data: null});
    })
});


app.get("/api/reddit/:term", (req, res) => {
	const searchTerm = req.params.term;
	const numStories = 10;
	const sortBy = "relevance"
	const subreddit = "news"

    const url = `http://www.reddit.com/r/${subreddit}/search.json?q=${searchTerm}&sort=${sortBy}&limit=${numStories}`;


	request({uri: url, simple: true}).then(extRes => {
		console.log({redditStories: extRes});
		res.json({error: null, data: extRes});
	}).catch((err) => {
		console.log(err);
		res.json({error: err, data: null});
	})
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
