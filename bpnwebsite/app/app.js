
require('dotenv').config ();
const { MongoClient } = require('mongodb');
const client = new MongoClient (process.env.MONGO_URl); 



async function main () {
    await client.connect ();
    console.log ('Produits acheter!');
    const db = client.db ('BpnWebsite');
    const collection = db.collection ('produits');

  try {
    const insertData = await collection.insertMany ([
        {
            nameProduct : 'Alex',
            age: 30 ,
            sexe :'Masculin',
            ProductPrice : 'Support ordinateur'


        },

          {
            nameProduct : 'Support tablette',
            Description : 'Donnez à votre tablette une position confortable avec nos supports spécialement conçus pour offrir un soutien stable et ajustable',
            ProductPrice : 9.99 ,

        },

          {
            nameProduct : 'Support ordinateur portable ',
            Description : 'Nos supports pour ordinateur portable offrent un angle de vue ergonomique pour une meilleure posture et réduisent les risques de tensions musculaires.',
            ProductPrice : 19.99,
            

        }

        
 

     ]);    
     console.log('Produits insérés  =>', insertData);
  } catch (err) { throw err; }

    try {
        const findMultipleData= await collection.find ({ product });
        console.log( await findMultipleData.toArray() );


  } catch (err) { throw err; }

    try {
        const Update = collection.updateOne ({ name: ''}, {
                $set: { name: ' ', sexe: '' },
        });
        console.log(await Update);


  } catch (err) { throw err; }

    try {
        const delet = await collection.deleteOne({ name: ''});
        console.log(await delet);


  } catch (err) { throw err; }


    return 'done!';
    
}

main ()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());