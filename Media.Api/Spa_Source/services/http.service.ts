import { IImageModel } from '../models/models';

export function httpService(link: string, HttpMethod: HttpMethod, model?: IImageModel)
{
  const params: RequestInit = {
    method: HttpMethod,
    body: JSON.stringify(model),
    headers: {'Content-Type': 'application/json;'}
  };
  return fetch(`/api/${link}`, params)
    .then(response => response.json());
}

export function test(): Promise<any>
{
  const model: IImageModel = {
    link: 'sffssa',
    name: 'sfaf'
  };
  console.log('Max');
  return httpService('Image/add', HttpMethod.POST, model);
}

export enum HttpMethod
{
  GET    = 'GET',
  POST   = 'POST',
  DELETE = 'DELETE',
  PUT    = 'PUT ',
}