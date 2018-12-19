export interface IEntity
{
  id?: number;
}

export interface IImageModel extends IEntity
{
  link?: string;
  name?: string;
  authorFullName?: string;
}

export interface IMusicModel extends IEntity
{
  link?: string;
  linkImage?: string;
  name?: string;
  authorFullName?: string;
}

export interface IFilmsModel extends IEntity
{
  link?: string;
  name?: string;
}

export class User
{
  public id: number;
  public name: string;
}

export class Image
{
  public id: number;
  public name: string;
  public link: string;
  public authorFullName: string;
}
