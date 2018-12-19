export interface IEntity
{
  id?: number;
}

export interface IImageModel extends IEntity
{
  link?: string;
  name?: string;
}

export interface IMusicModel extends IEntity
{
  link?: string;
  linkImage?: string;
  name?: string;
  authorFullName?: string;
}

export interface IVideoModel extends IEntity
{
  link?: string;
  name?: string;
}

export class Image
{
  public id: number;
  public name: string;
  public link: string;
  public authorFullName: string;
}

export class Music
{
  public id: number;
  public name: string;
  public link: string;
  public linkImage: string;
  public authorFullName: string;
}

export class Video
{
  public id: number;
  public name: string;
  public link: string;
}