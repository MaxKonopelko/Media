import { Component } from '../../../libreris/component';
import { Patterns } from '../../../libreris/common';
import { formContent } from '../../controls/controls';
import { VideoListComponent } from './video-list.component';
import { VideoContentComponent } from './video-content.component';
import { IVideoModel } from '../../../models/models';

@Component
export class VideoUrlComponent
{
  public _videoList = new VideoListComponent();
  private _videoContentComponent = new VideoContentComponent();

  public onInit(): void
  {
    document.getElementById('url-films').addEventListener('change', this.handleChange);
  }

  private handleChange = () =>
  {
    const link = document.getElementById('url-films')['value'];
    this._videoContentComponent.showFilmByLink(link);
  };

  private handleSubmit = (formValues: object) =>
  {
    const video: IVideoModel = {
      link: formValues['url'],
      name: formValues['name'],
    };

    this._videoList.add(video);
    this.resetForm();
  };

  private resetForm(): void
  {
    document.getElementById('url-films')['value'] = '';
    document.getElementById('url-name')['value'] = '';
  }

  public template(): string
  {
    const content = ` <form>
                         <div class="flex">  
                            <div class="col-3">
                              <input class="effect-7" id="url-films" type="text" name="url" placeholder="Url films.." required pattern="${Patterns.VideoUrl}" >
                                  <span class="focus-border">
                                    <i></i>
                                  </span>
                            </div>
                         </div>
                         <div class="flex">  
                              <div class="col-3">
                                  <input class="effect-7" id="url-name"  type="text" name="name" placeholder="Films name.." required pattern="${Patterns.Name}">
                                    <span class="focus-border">
                                      <i></i>
                                    </span>
                              </div>
                              <div class="col-3">
                                <input class="effect-7" id="submit" type="submit" value="Save">
                                  <span class="focus-border">
                                    <i></i>
                                  </span>
                              </div>    
                         </div>         
                      </form>
                   `;
    return formContent(content, this.handleSubmit);
  }
}