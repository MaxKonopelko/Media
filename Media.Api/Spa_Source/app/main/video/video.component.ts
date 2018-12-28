import { IComponent } from '../../types';
import { VideoUrlComponent } from './video-url.component';
import { VideoListComponent } from './video-list.component';
import { VideoContentComponent } from './video-content.component';
import { Component } from '../../../libreris/component';

@Component
export class VideoComponent implements IComponent
{
  private _urlComponent = new VideoUrlComponent();
  private _videoContentComponent = new VideoContentComponent();
  private _videoListComponent = new VideoListComponent();

  public onInit(): void
  {
    document.getElementById('url-root').innerHTML += this._urlComponent.template();
    document.getElementById('films-root').innerHTML += this._videoContentComponent.template();
    document.getElementById('films-root').innerHTML += this._videoListComponent.template();
  }

  public template(): string
  {
    return `
            <div class="film-header">Films</div>
            <div class="film-data">
                <div id="url-root" class="url-root"></div>          
                <div id="films-root" class="films-root"></div>     
            </div>
           `;
  }
}