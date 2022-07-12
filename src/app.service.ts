import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

type Token = {
  logo: string;
  name: string;
  symbol: string;
};

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getCoingecko() {
    const BASE_URL = 'https://www.coingecko.com/?page=';
    const TOTAL_PAGE = 20;
    const RESULT: Token[] = [];

    for (let index = 1; index <= TOTAL_PAGE; index++) {
      try {
        console.log('...Fetching page ' + index + '...');
        const res = await axios.get(`${BASE_URL}${index}`);
        const data = res.data;
        const $ = cheerio.load(data);

        $(
          'td.py-0.coin-name.cg-sticky-col.cg-sticky-third-col.px-0.tw-max-w-40.tw-w-40',
          data,
        ).each((_node, elem) => {
          const logo = $(elem).find('img').attr('src');
          const name = $(elem).find('a.tw-hidden').text();
          const symbol = $(elem).find('a.d-lg-none.font-bold.tw-w-12').text();

          RESULT.push({
            logo: logo.replace(/\?.*$/g, ''),
            name: name.replace(/(\r\n|\n|\r)/gm, ''),
            symbol: symbol.replace(/(\r\n|\n|\r)/gm, ''),
          });
        });
      } catch (error) {
        console.log(error);
      }
    }

    console.log('...Done...Fetching...');
    // console.log('...Start Writting To File...');

    // await fs.promises
    //   .writeFile('tokens.json', JSON.stringify(RESULT))
    //   .catch((err) => console.log(err));

    // console.log('...Writting To File Completed...');

    return RESULT;
  }
}
