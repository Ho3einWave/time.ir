# Time.ir Mobile App Private Api
a lighweith module to work with time.ir private api


##TODO's

- [X] method to get cities for religious times
- [ ] get city religious times by id
- [ ] get month event by month and year 
- [ ] convert time to other base's
- [ ] a documention and examples

##Usage
1. install with npm
```bash
npm i time.ir-private-api
```

2. use in your project
```js
const Timeir = require("time.ir-private-api");

const time = new Timeir();

(async ()=>{

    const now = await time.now()
    const quote = await time.randomQuote()

    console.log(now,quote)

})();

```