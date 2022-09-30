const { domain, apiver } = require("./core/constants")
const axios = require("axios").default



class Client {
    constructor() {
        this.version = apiver
        this.endpoint = `${domain}/${this.version}`
        this.apikey = "97qVHZFLxxyQajE8cZhUMmgxQSZF259e" // they hard coded api key in the app XD [api key is same in every device]

    }

    async now() {
        const endPointURL = `${this.endpoint}/time/fa/time/now`
        const headers = {
            "x-api-key": this.apikey
        }
        const data = await axios.get(endPointURL, {
            headers: headers
        }).then(data => data.data).catch(e => {
            return {
                "error": true,
                "message": ".مشکلی در دریافت اطلاعات پیش امد"
            }
        })
        return data

    }

    async randomQuote() {
        const endPointURL = `${this.endpoint}/brainyQuote/fa/quotes/RandomQuote`
        const headers = {
            "x-api-key": this.apikey
        }

        const data = await axios.get(endPointURL, {
            headers: headers
        }).then(data => data.data).catch(e => {
            return {
                "error": true,
                "message": ".مشکلی در دریافت اطلاعات پیش امد"
            }
        })
        return data


    }

    async getCities() {
        const country = 78 // coutries code is not documented for now we use iran
        const endPointURL = `${this.endpoint}/sitemember/fa/countries/${country}/provinceswithcities?rankings=1%2C2`
        const headers = {
            "x-api-key": this.apikey
        }

        const data = await axios.get(endPointURL, {
            headers: headers
        }).then(data => data.data).catch(e => {
            return {
                "error": true,
                "message": ".مشکلی در دریافت اطلاعات پیش امد"
            }
        })
        return data

    }

}

module.exports = Client