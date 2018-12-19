import { IComponent } from '../types';
import { ImagesComponent } from './images/images.component';
import { Component } from '../../libreris/component';

@Component
export class MainComponent implements IComponent
{
  private _imagesComponent = new ImagesComponent();

  public onInit(): void
  {
    this.handleSubmit(this._imagesComponent);
    document.getElementById('fl1').addEventListener('click', (e) => this.handleSubmit(this._imagesComponent));
  }

  private handleSubmit = (component: IComponent) =>
  {
    document.getElementById('content').innerHTML = component.template();
  };

  public template(): string
  {
    return `            
            <div class="menu">
                 <div class="b1" id="fl1"><i class="fa fa-youtube-play" style="font-size:36px"></i>Photo</div>
                 <div class="b1" id="fl2"><i class="fa fa-music" style="font-size:36px"></i>Music</div>
                 <div class="b1" id="fl3"><i class="fa fa-photo" style="font-size:36px;"></i>Film</div>
            </div>
            <div class="content" id="content"></div>`;
  }
}