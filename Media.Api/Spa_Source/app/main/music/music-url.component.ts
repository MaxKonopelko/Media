import { Component } from '../../../libreris/component';
import { IComponent } from '../../types';
import { MusicListComponent } from './music-list.component';
import { MusicContentComponent } from './music-content.component';
import { formContent } from '../../controls/controls';
import { Patterns } from '../../../libreris/common';
import { IMusicModel } from '../../../models/models';

@Component
export class MusicUrlComponent implements IComponent
{
  public _musicList = new MusicListComponent();
  private _musicContentComponent = new MusicContentComponent();

  public onInit(): void
  {
    document.getElementById('url-music').addEventListener('change', this.handleChange);
  }

  private handleChange = () =>
  {
    //const linkImage = document.getElementById('url-music-image')['value'];
    const linkMusic = document.getElementById('url-music')['value'];
    this._musicContentComponent.showMusicByLink(linkMusic);
  };

  private handleSubmit = (formValues: object) =>
  {
    const music: IMusicModel = {
      link: formValues['url'],
      linkImage: formValues['url-image'],
      name: formValues['name'],
      authorFullName: formValues['author'],
    };

    this._musicList.add(music);
    this.resetForm();
  };

  private resetForm(): void
  {
    document.getElementById('url-music')['value'] = '';
    document.getElementById('url-music-image')['value'] = '';
    document.getElementById('url-name')['value'] = '';
    document.getElementById('url-author')['value'] = '';
  }

  public template(): string
  {
    const content = ` <div class="flex">                         
                        <div class="col-3">
                            <input class="effect-7" id="url-music" type="text" name="url" placeholder="Url music.." required pattern="${Patterns.MusicUrl}" >
                            <span class="focus-border">
                              <i></i>
                            </span>
                        </div>
                      </div>
                      <div class="flex">  
                        <div class="col-3">
                            <input class="effect-7" id="url-music-image" type="text" name="url-image"  placeholder="Url image.." required pattern="${Patterns.ImageUrl}" >
                            <span class="focus-border">
                              <i></i>
                            </span>
                        </div>
                      </div>
                      <div class="flex">  
                        <div class="col-3">
                            <input class="effect-7" id="url-author"  type="text" name="author" placeholder="Author name.." required pattern="${Patterns.Name}">
                              <span class="focus-border">
                                <i></i>
                              </span>
                        </div>
                        <div class="col-3">
                            <input class="effect-7" id="url-name"  type="text" name="name"  placeholder="Music name.." required pattern="${Patterns.Name}">
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
                   `;

    return formContent(content, this.handleSubmit);
  }
}