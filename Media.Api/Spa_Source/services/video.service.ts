import { IVideoModel, Video } from '../models/models';

export class VideoService
{
  public static getAll(): Promise<Video[]>
  {
    const param: RequestInit = {
      method: 'GET',
    };
    return fetch('/api/Video/get-all', param)
      .then(response => response.json());
  }

  public static getById(id: number): Promise<Video>
  {
    const param: RequestInit = {
      method: 'GET',
    };
    return fetch(`/api/Video/get-by-id/${id}`, param)
      .then(response => response.json());
  }

  public static add(id: IVideoModel): Promise<number>
  {
    const params: RequestInit = {
      method: 'POST',
      body: JSON.stringify(id),
      headers: {'Content-Type': 'application/json;'}
    };
    return fetch(`/api/Video/add`, params)
      .then(response => response.json());
  }

  public static remove(id: number): Promise<number>
  {
    const param: RequestInit = {
      method: 'DELETE'
    };
    return fetch(`/api/Video/remove/${id}`, param)
      .then(response => response.json());
  }
}