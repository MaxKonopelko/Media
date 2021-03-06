import { IComponent } from '../types';
import { ImagesComponent } from './images/images.component';
import { MusicComponent } from './music/music.component';
import { Component } from '../../libreris/component';
import { VideoComponent } from './video/video.component';
import { AxiosService } from '../../services/image.service';

@Component
export class MainComponent implements IComponent
{
  private _imagesComponent = new ImagesComponent();
  private _musicsComponent = new MusicComponent();
  private _videoComponent = new VideoComponent();

  public onInit(): void
  {
    this.handleSubmit(this._imagesComponent);
    document.getElementById('fl1').addEventListener('click', (e) => this.handleSubmit(this._imagesComponent));
    document.getElementById('fl2').addEventListener('click', (e) => this.handleSubmit(this._musicsComponent));
    document.getElementById('fl3').addEventListener('click', (e) => this.handleSubmit(this._videoComponent));

    document.getElementById('request').addEventListener('click', (e) =>
    {
      AxiosService.add().then(value =>
      {
      });
    });
    // const t: IImageModel = {
    //   link: 'https://pp.userapi.com/c840431/v840431352/6492/ckTyuK0oreU.jpg',
    //   name: 'Dasha',
    // };
    // httpService1(`Image/remove/40`, HttpMethodAxios.DELETE).then(image =>
    // {
    //   console.log('image', image);
    // });
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
                 <button id="request">Request</button>
            </div>
            <div class="content" id="content"></div>`;
  }
}