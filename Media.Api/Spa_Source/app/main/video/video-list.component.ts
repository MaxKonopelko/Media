import { Component } from '../../../libreris/component';
import { IVideoModel } from '../../../models/models';
import { VideoService } from '../../../services/video.service';
import { VideoContentComponent } from './video-content.component';

@Component
export class VideoListComponent
{
  private _videoContentComponent = new VideoContentComponent();
  private activeId: number;
  private buffer: number;

  public onInit(): void
  {
    this.refresh();
  }

  public add(video: IVideoModel): void
  {
    VideoService.add(video).then(video =>
    {
      this.refresh();
      this.activeId = this.buffer;
      this.activateElement();
    });

  }

  private refresh(): void
  {
    VideoService.getAll().then(video =>
    {
      const filmsUl = document.getElementById('films-ul');
      let str = '';

      video.forEach(film =>
      {
        this.buffer = film.id;
        str += `
             <li id="film-li" class="film-li" data-id=${film.id}>
                <span id="film-span" class="film-span" >
                    ${film.id}. Name: ${film.name}
                </span>
                <i id='fa-close' class="fa fa-close" style="font-size:24px"></i>
             </li>
             `;
      });
      filmsUl.innerHTML = str;

      this.addSpanClickHandler(filmsUl);
      this.addIClickHandler(filmsUl);
    });

  }

  private addSpanClickHandler = (films: HTMLElement) =>
  {
    const spanCollection = films.querySelectorAll('span');
    const listArray = Array.from(spanCollection);

    listArray.forEach(spanElement =>
    {
      spanElement.addEventListener('click', () =>
      {
        const parent = spanElement.parentElement;
        const id = parseInt(parent.dataset.id);
        this.activeId = id;
        this._videoContentComponent.showFilmById(id);
        this.refresh();
        this.activateElement();
      });
    });
  };

  public activateElement = () =>
  {
    const liCollection = document.querySelectorAll('.films-ul li');
    const listLi = Array.from(liCollection);
    const liElem = listLi.find(le => parseInt(le.getAttribute('data-id')) === this.activeId);
    liElem.classList.add('newSpan');
  };

  public addIClickHandler = (filmsUl: HTMLElement) =>
  {
    const ICollection = filmsUl.querySelectorAll('i');
    const listArray = Array.from(ICollection);

    listArray.forEach(iElement =>
    {
      iElement.addEventListener('click', () =>
      {
        const parent = iElement.parentElement;
        const id = parseInt(parent.dataset.id);
        VideoService.remove(id).then(video =>
        {
          this.refresh();
        });
        this._videoContentComponent.clear();
      });
    });
  };

  public template(): string
  {
    return `
             <div class="films-list">
                 <ul class="films-ul" id="films-ul"></ul>
              </div>
            `;
  }
}