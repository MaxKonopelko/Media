import { IImageModel, Image } from '../models/models';
import { HttpMethod, HttpService, httpService, httpService1 } from './http.service';

export class ImageService
{
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

export class AxiosService
{
  public static getAll(): Promise<Image[]>
  {
    return httpService1('Image/get-all', HttpMethod.GET);
  }

  public static getById(id: number): Promise<Image>
  {
    return httpService1(`Image/get-by-id/${id}`, HttpMethod.GET);
  }

  public static add(): Promise<number>
  {
    return HttpService.send(`Image/add`, HttpMethod.POST);
  }

  public static remove(id: number): Promise<boolean>
  {
    return httpService1(`Image/remove/${id}`, HttpMethod.DELETE);
  }
}
