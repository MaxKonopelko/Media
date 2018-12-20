import { IImageModel, Image } from '../models/models';
import { HttpMethod, httpService } from './http.service';

export class ImageService
{
  // public static getAll(): Promise<Image[]>
  // {
  //   const param: RequestInit = {
  //     method: 'GET',
  //   };
  //   return fetch('/api/Image/get-all', param)
  //     .then(response => response.json());
  // }

  public static getAll(): Promise<Image[]>
  {
    return httpService('Image/get-all', HttpMethod.GET);
  }

  public static getById(id: number): Promise<Image>
  {
    return httpService(`Image/get-by-id/${id}`, HttpMethod.GET);
  }

  public static add(model: IImageModel): Promise<number>
  {
    return httpService(`Image/add`, HttpMethod.POST, model);
  }

  public static remove(id: number): Promise<boolean>
  {
    return httpService(`Image/remove/${id}`, HttpMethod.DELETE);
  }

}