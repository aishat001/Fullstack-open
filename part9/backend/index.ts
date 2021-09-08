import express from 'express';
const app = express();
import  { calculateBmi }  from "./calculateBmi"

app.get('/ping', (_req, res) => {
    res.send('pong');
});
app.get('/bmi', (req, res) => {
    // const { query } = req;
    
    let { height, weight } = req.query

    if (!height || !weight) {
        return res.status(400).json({ error: "parameters missing"})
    }


    if (isNaN(Number(height)) || isNaN(Number(weight))) {
        return res.status(400).json({ error: "malformatted parameters" });
    }
    const bmi = calculateBmi(Number(height), Number(weight));
    return res.send({ weight, height, bmi });
});

const PORT = 3002

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    
});

// http://localhost:3002/bmi?height=180&weight=72