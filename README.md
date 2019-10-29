# NODE PCFMELLOBOX
This project is a dropbox simulation using Socket.io, MongoDB Atlas and Mongoose . It contains a backend application. 

## Which technologies were did use?
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Yarn](https://yarnpkg.com)
* [Socket.io](https://socket.io/)
* [Mongoose](https://mongoosejs.com/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Minimum Requisits  
Node and Yarn installed

## How to run?
```$ yarn install && yarn start```  
The API will be running on ```http://localhost:3333```

## Routes
Following avaliables routes:

**GET  /boxes/:id/files** : {:id} is a box id. This route return the box properties and it files.  
**POST /boxes** : This route create new box. The body must contain { title: 'Some Title' } attribute with some title.  
**POST /boxes/:id/files** : {:id} is a box id. This route save a file into box. The body must contain a form-data file with key equal 'file'.   

## License
MIT
