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
		res.json({error: null, data: extRes});
    }).catch((err) => {
        res.json({error: err, data: null});
    })
});


// app.get("/api/reddit/:term", (req, res) => {
//     const search = function(searchTerm, searchLimit, sortBy) {
//         return fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
//             .then(result => result.json())
//             .then(data => data.data.children.map(data => {
//                 return data.data;
//             }))
//             .catch(err => console.log(err));
//     }
//
// // using search.
//     search("league", "10", "relevance").then(results => {
//         // console.log(results);
//         results.map(oneResult => {
//             console.log("title: ", oneResult.title);
//             console.log("selftext: ", oneResult.selftext);
//         })
//     })
// });

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
