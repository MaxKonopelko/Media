import { IComponent } from '../../types';
import { Component } from '../../../libreris/component';

@Component
export class ImagesListComponent implements IComponent
{
  public template(): string
  {
    return `
              <div class="photo-list">
                     <ul class="photos" id="photos"></ul>
               </div>       
            `;
  }
}
