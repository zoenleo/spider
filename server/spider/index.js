const request = require('request');

class Spider {
    constructor(props) {
        this.url = props.url;
        this.sleep = props.sleep; //ms
    }

    spider() {
        const options = {
            url: this.url,
            headers: {
                // 'User-Agent': this.randomUserAgent()
            }
        };
        return new Promise((resolve, reject) => {
            request(options, (err, response, body) => {
                if (!err && response.statusCode === 200) {
                    return resolve(body)
                } else {
                    return reject(err)
                }
            })
        });
    }

    start(controller) {
        setInterval(async () => {
            try {
                const body = await this.spider();
                controller(body);
            } catch(err) {
                console.log(err);
            }
        }, this.sleep);
    }
}

module.exports = Spider;