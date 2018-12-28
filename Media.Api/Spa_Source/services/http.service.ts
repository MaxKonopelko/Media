import { IImageModel } from '../models/models';
import axios, { AxiosRequestConfig } from 'axios';

export function httpService(link: string, HttpMethod: HttpMethod, model?: IImageModel): Promise<any>
{
  const params: RequestInit = {
    method: HttpMethod,
    body: JSON.stringify(model),
    headers: {'Content-Type': 'application/json;'}
  };
  return fetch(`/api/${link}`, params)
    .then(response => response.json());
}

export enum HttpMethod
{
  GET    = 'GET',
  POST   = 'POST',
  DELETE = 'DELETE',
  PUT    = 'PUT ',
}

export function httpService1(url: string, method: HttpMethod, data?: any): Promise<any>
{
  const config: AxiosRequestConfig = {
    url: url,
    method: method,
    data: data,
    baseURL: 'api'
  };
  return axios.request<HttpMethod>(config)
    .then(response =>
    {
      return response.data;
    }).catch(error =>
    {
      if (error.response === undefined)
      {
        const timer = setInterval(time =>
        {
          //условие
          if (true)
          {
            clearInterval(timer);
            //вызов функции которая не прошла
          }
        }, 500);
      }
      return error.response;
    });
}

export class HttpService
{
  private static httpService(url: string, method: HttpMethod, data?: any): Promise<any>
  {
    const config: AxiosRequestConfig = {
      url: url,
      method: method,
      data: data,
      baseURL: 'api',
    };
    return axios.request<HttpMethod>(config)
      .then(response =>
      {
        return response.data;
      });
  }

  public static send(url: string, method: HttpMethod, model?: IImageModel): Promise<any>
  {
    return new Promise(resolve =>
    {
      this.httpService(url, method, model)
        .then(data =>
        {
          console.log('Successful!');
        })
        .catch(error =>
        {
          if (error.response === undefined)
          {
            //пошлю запрос на сервер, дождусь ответа и в если ответ отрицательный то послать опять запрос на сервер

            const fun = () =>
            {
              this.httpService('Ping/ping`', HttpMethod.POST)
                .then(resolve =>
                {
                  this.httpService(url, method, model).then(data =>
                  {

                  });
                  console.log('Good');

                })
                .catch(error =>
                {
                  setTimeout(() =>
                  {
                    fun();
                  }, 1000);
                });
            };
            fun();
          }
          else
          {
            return console.log(error.response.status);
          }
        });
    });
  }
}