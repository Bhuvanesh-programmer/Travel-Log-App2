
use('trainee');
db.trainee.insertOne([
    {
        id:401,
        name:"Alex",
        score:88,
        city:"Mumbai"

    },
    {
        id:402,
        name:"Rinu",
        score:82,
        city:"Hyderabad"

    },
    {
        id:403,
        name:"George",
        score:70,
        city:"Mumbai"

    },
    {
        id:404,
        name:"Mathew",
        score:83,
        city:"Mumbai"

    },
    {
        id:405,
        name:"Victoria",
        score:88,
        city:"Chennai"

    },
]
)
db.trainee.find({});
db.trainee.aggregate(
    {$match:{score:{$gt:85}},
    {$addFields:{FieldCategory:"HPF"}}
    })

db.trainee.$match{
    city:{$gt}
}