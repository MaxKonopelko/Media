export function createCopy<T>(obj: T): T
{
  return JSON.parse(JSON.stringify(obj));
}

export function upperCase(str: string): string
{

  return str[0].toUpperCase() + str.slice(1);
}

export function isExistHtmlInDOM(element: HTMLElement): boolean
{
  return document.body.contains(element);
}

export enum Patterns
{
  ImageUrl = 'https?:\\/\\/.*\\.(?:png|jpg|jpeg|gif)',
  MusicUrl = 'https?:\\/\\/.*\\.(?:mp3)',
  VideoUrl = 'https?:\\/\\/.*\\.(?:mp4)',
  Name     = '[A-Za-zА-Яа-яЁё0-9 ]{1,15}',
}

export const urlDefaultImage = 'http://placehold.it/200x200';

// export function Jquery()
// {
//   return new Promise(function (resolve)
//   {
//     const timer = setInterval(function ()
//     {
//       console.warn('jQuery timer', typeof jQuery);
//       if (jQuery != null && typeof jQuery === 'function')
//       {
//         clearInterval(timer);
//         resolve(jQuery);
//       }
//     }, 1);
//   });
// }

// public static send(url: string, method: HttpMethod, data?: any): Promise<any>
// {
//   return new Promise(resolve =>
//   {
//     this.sendHttp(url, method, data)
//       .then(data =>
//       {
//         resolve(data);
//       })
//       .catch(err =>
//       {
//
//       });
//   });
// }

export function Jquery(t: Function)
{
  const timer = setInterval(function ()
  {
    console.warn('jQuery timer', typeof jQuery);
    if (jQuery != null && typeof jQuery === 'function')
    {
      clearInterval(timer);
      t(jQuery);
    }
  }, 1);
}