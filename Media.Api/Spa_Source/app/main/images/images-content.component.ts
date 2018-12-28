import { IComponent } from '../../types';
import { Component } from '../../../libreris/component';
import { urlDefaultImage } from '../../../libreris/common';
import { AxiosService } from '../../../services/image.service';

@Component
export class ImagesContentComponent implements IComponent
{

  public showImageById(id: number): void
  {
    AxiosService.getById(id).then(image =>
    {
      document.getElementById('image')['src'] = image.link;
    });
  }

  public showImageByLink(link: string): void
  {
    document.getElementById('image')['src'] = link;
  }

  public clear(): void
  {
    document.getElementById('image')['src'] = urlDefaultImage;
  }

  public template(): string
  {
    return `
              <div class= "photo-content">  
                     <div class="photo">
                        <div class="photo-size">                                       
                            <img class="image" id="image" src="${urlDefaultImage}">
                        </div>
                     </div>
              </div>
    `;
  }
}