import { IMusicModel, Music } from '../models/models';

export class MusicService
{
  public static getAll(): Promise<Music[]>
  {
    const param: RequestInit = {
      method: 'GET',
    };
    return fetch('/api/Music/get-all', param)
      .then(response => response.json());
  }

  public static getById(id: number): Promise<Music>
  {
    const param: RequestInit = {
      method: 'GET',
    };
    return fetch(`/api/Music/get-by-id/${id}`, param)
      .then(response => response.json());
  }

  public static add(id: IMusicModel): Promise<number>
  {
    const params: RequestInit = {
      method: 'POST',
      body: JSON.stringify(id),
      headers: {'Content-Type': 'application/json;'}
    };
    return fetch(`/api/Music/add`, params)
      .then(response => response.json());
  }

  public static remove(id: number): Promise<number>
  {
    const param: RequestInit = {
      method: 'DELETE'
    };
    return fetch(`/api/Music/remove/${id}`, param)
      .then(response => response.json());
  }
}