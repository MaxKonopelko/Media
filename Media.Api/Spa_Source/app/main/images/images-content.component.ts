import { IComponent } from '../../types';
import { Component } from '../../../libreris/component';
import { urlDefaultImage } from '../../../libreris/common';

@Component
export class ImagesContentComponent implements IComponent
{

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