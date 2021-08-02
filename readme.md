# BACKEND WITH NODEJS

Cara instalasi sebagai berikut:

- Clone repository ini

```
https://github.com/roufurrohim/backend-js.git
```

- Instalasi depedensi :

```
npm install express body-parser dot-env mysql2 nodemon
```

## API DOCUMENTATION

**Standard Status Response**

| Status Code | Description                             |
| :---------- | :-------------------------------------- |
| 200         | `Get all success`                       |
| 201         | `Created data success`                  |
| 400         | `Error on client side (input false)`    |
| 404         | `Data not found`                        |
| 502         | `Invalid response from another request` |


**Standard API**

[click me](https://github.com/roufurrohim/backend-js/blob/master/backend2.postman_collection.json)

**.env example**
```
HOST=
DB_USERNAME=
DB_PASSWORD=
```