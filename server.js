import express from 'express';
import router from './server/routes';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1/', router);

app.get('/', (req, res) => {
    return res.status(200).send({'message': 'Welcome'})
})


app.listen(3000)
console.log('app running on port' , 3000);