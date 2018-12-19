import { Component } from '../../../libreris/component';
import { IComponent } from '../../types';
import { MusicService } from '../../../services/music.service';
import { MusicContentComponent } from './music-content.component';
import { upperCase } from '../../../libreris/common';
import { Music, IMusicModel } from '../../../models/models';

@Component
export class MusicListComponent implements IComponent
{
  private musicsContentComponent = new MusicContentComponent();
  public musicList: Music[] = [];
  private activeId: number;

  public onInit(): void
  {
    this.setActive();
  }

  public setActive(): void
  {
    MusicService.getAll().then(music =>
    {
      if (music[music.length - 1])
      {
        this.activeId = music[music.length - 1].id;
        this.musicsContentComponent.showMusicById(this.activeId);
      }
      this.refresh();
    });
  }

  public add(music: IMusicModel): void
  {
    MusicService.add(music).then(index =>
    {
      this.refresh();
      this.activeId = index;
      this.musicsContentComponent.showMusicById(index);
    });
  }

  private refresh(): void
  {
    MusicService.getAll().then(music =>
    {
      this.musicList = music;
      const musicUl = document.getElementById('music-ul');
      let str = '';

      music.forEach(music =>
      {
        str += `
              <li id="music-li" class="music-li" data-id=${music.id}>
                <span id="music-span" class="music-span" >
                   ${music.id}. ${upperCase(music.authorFullName)} - ${music.name}
                </span>
                <i id='fa-close' class="fa fa-close" style="font-size:24px"></i>
              </li> 
             `;
      });
      musicUl.innerHTML = str;

      this.activateElement();
      this.addSpanClickHandler(musicUl);
      this.addIClickHandler(musicUl);
    });
  }

  public activateElement = () =>
  {
    const liCollection = document.querySelectorAll('.music-ul li');
    const listLi = Array.from(liCollection);

    const liElem = listLi.find(le => parseInt(le.getAttribute('data-id')) === this.activeId);
    if (liElem !== undefined)
    {
      liElem.classList.add('newSpan');
    }
  };

  private addSpanClickHandler = (musicUl: HTMLElement) =>
  {
    const spanCollection = musicUl.querySelectorAll('span');
    const listArray = Array.from(spanCollection);

    listArray.forEach(spanElement =>
    {
      spanElement.addEventListener('click', () =>
      {
        const parent = spanElement.parentElement;
        const id = parseInt(parent.dataset.id);
        this.activeId = id;
        this.musicsContentComponent.showMusicById(id);
        this.refresh();
      });
    });
  };

  public addIClickHandler = (musicUl: HTMLElement) =>
  {
    const ICollection = musicUl.querySelectorAll('i');
    const listArray = Array.from(ICollection);

    listArray.forEach(iElement =>
    {
      iElement.addEventListener('click', () =>
      {
        const parent = iElement.parentElement;
        const id = parseInt(parent.dataset.id);

        MusicService.remove(id).then(music =>
        {
          this.setActive();
        });
        this.musicsContentComponent.clear();
      });
    });
  };

  public template(): string
  {
    return ` 
            <div class="music-list">
                  <ul class="music-ul" id="music-ul"></ul>
            </div>
           `;
  }
}
