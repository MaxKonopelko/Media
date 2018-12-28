import { Component } from '../../../libreris/component';
import { VideoService } from '../../../services/video.service';

@Component
export class VideoContentComponent
{
  public showFilmById(id: number): void
  {
    VideoService.getById(id).then(video =>
    {
      document.getElementById('films-name').innerHTML = `Track : ${video.name}`;
      this.showFilmByLink(video.link);
    });
  }

  public showFilmByLink(link: string): void
  {
    const video = document.getElementById('films-video');
    video.innerHTML = `
                        <video controls autoplay>
                           <source id="film" src="${link}">
                         </video>
                      `;
  }

  public clear(): void
  {
    document.getElementById('film')['src'] = '';
  }

  public template(): string
  {
    return `
                <div class="films-content">
                   <div class="films-play" id="films-play">
                      <div class="films-name" id="films-name">Track :</div>
                      <div class="films-video" id="films-video">
                        <video controls>
                             <source id="film" src="">
                        </video>
                      </div>
                   </div>
                </div> 
            `;
  }
}