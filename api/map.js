const axios = require("axios").default;

export default function handler(req, res) {
    const { x, y, z } = req.query;
    const url = `https://mt0.google.com/vt/lyrs=s&x=${x}&y=${y}&z=${z}`;
    axios({
        method: "get",
        url: url,
        responseType: "arraybuffer",
    })
        .then(function (response) {
            res.setHeader("Content-Type", "image/jpeg");
            res.status(200).send(response.data);
        })
        .catch(function (err) {
            res.status(500).send("someting error\n" + err);
        });
}
