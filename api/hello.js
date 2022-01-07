import got from "got";
export default function handler(req, res) {
    const url = "https://mt0.google.com/vt/lyrs=s&x=0&y=0&z=0";
    const { x, y, z } = req.query;
    const res = await got(url, {}).buffer();
    // res.status(200).send(`x: ${x} y:${y} z:${z} !`);
    res.status(200).send(res);
}
