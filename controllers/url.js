const shortid = require("shortid");
const URL = require('../models/url');

async function handleshorturl(req, res) {
    console.log('Request body:', req.body); // Add this to debug the incoming request body

    const { body } = req;
    if (!body || !body.url) return res.status(400).json({ error: 'url is required' });

    const shortId = shortid.generate();

    try {
        await URL.create({
            shortid: shortId,
            redirecturl: body.url,
            visithistory: [],
        });

        return res.json({ id: shortId });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { handleshorturl };

// const {shortid}=require("shortid");
// const URL=require('../models/url');


// async function handleshorturl (req,res){
//     const { body } = req; 
//     if(!body.url)return res.status(400).json({error:'url is required'});
//        const shortid=shortid();

//        await URL.create({
//         shortid:shortid,
//         redirecturl:body.url,
//         visithistory:[],

//        });
      
//        return res.json( {id:shortid});

// }

// module.exports={handleshorturl};