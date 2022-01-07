export default function handler(req, res) {
    const { x,y,z } = req.query;
    res.status(200).send(`x: ${x} y:${y} z:${z} !`);
}
