import * as request from 'request';
import { e2eConfig } from '../config';

export const requestApi = {
  post: (url: string, callback: (response: request.RequestResponse, body: any) => void) => {
    request.post(e2eConfig.baseUrl + url, (error: any, response: request.RequestResponse, body: any) => {
      if (error) {
        console.error(error);
        return;
      }

      body = JSON.parse(body);
      callback(response, body);
    });
  },
};
