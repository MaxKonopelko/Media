import { IImageModel, Image } from '../models/models';

export class ImageService
{
  public static getAll(): Promise<Image[]>
  {
    const param: RequestInit = {
      method: 'GET',
    };
    return fetch('/api/Image/get-all', param)
      .then(response => response.json());
  }

  public static getById(id: number): Promise<Image>
  {
    const param: RequestInit = {
      method: 'GET',
    };
    return fetch(`/api/Image/get-by-id/${id}`, param)
      .then(response => response.json());
  }

  public static add(id: IImageModel): Promise<number>
  {
    const params: RequestInit = {
      method: 'POST',
      body: JSON.stringify(id),
      headers: {'Content-Type': 'application/json;'}
    };
    return fetch(`/api/Image/add`, params)
      .then(response => response.json());
  }

  public static remove(id: number): Promise<boolean>
  {
    const param: RequestInit = {
      method: 'DELETE'
    };
    return fetch(`/api/Image/remove/${id}`, param)
      .then(response => response.json());
  }

  // public static test(model: IImageModel)
  // {
  //   return httpService('Image/add', HttpMethod.GET, model);
  // }
}
export enum HttpMethod
{
  GET = 'GET'
}
