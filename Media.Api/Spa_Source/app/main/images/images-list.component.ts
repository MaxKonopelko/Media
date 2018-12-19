import { IComponent } from '../../types';
import { Component } from '../../../libreris/component';
import { ImageService } from '../../../services/image.service';
import { IImageModel, Image } from '../../../models/models';
import { ImagesContentComponent } from './images-content.component';

@Component
export class ImagesListComponent implements IComponent
{
  private imagesContentComponent = new ImagesContentComponent();
  public imageList: Image[] = [];
  public activeId: number;
  public buffer: number;

  public onInit(): void
  {
    this.setActive();
  }

  public setActive(): void
  {

    ImageService.getAll().then(images =>
    {
      if (images[images.length - 1])
      {
        this.activeId = images[images.length - 1].id;
        this.imagesContentComponent.showImageById(this.activeId);
      }
      this.refresh();
    });
  }

  public add(image: IImageModel): void
  {
    ImageService.add(image).then(index =>
    {
      this.refresh();
      this.activeId = index;
      this.imagesContentComponent.showImageById(index);
    });
  }

  private refresh(): void
  {
    ImageService.getAll().then(images =>
    {
      this.imageList = images;

      const photos = document.getElementById('photos');
      let str = '';

      images.forEach(image =>
      {
        str += `
               <li id="photo-li" class="photo-li" data-id=${image.id}>
                  <span id="photo-span" class="photo-span" >
                      ${image.id}. Photo: ${image.name}
                  </span>
                  <i id='fa-close' class="fa fa-close" style="font-size:24px"></i>
               </li>
        `;
      });
      photos.innerHTML = str;

      this.activateElement();
      this.addSpanClickHandler(photos);
      this.addIClickHandler(photos);
    });
  }

  public activateElement = () =>
  {
    const liCollection = document.querySelectorAll('.photos li');
    const listLi = Array.from(liCollection);

    const liElem = listLi.find(le => parseInt(le.getAttribute('data-id')) === this.activeId);
    if (liElem !== undefined)
    {
      liElem.classList.add('newSpan');
    }
  };

  private addSpanClickHandler = (photos: HTMLElement) =>
  {
    const spanCollection = photos.querySelectorAll('span');
    const listArray = Array.from(spanCollection);

    listArray.forEach(spanElement =>
    {
      spanElement.addEventListener('click', () =>
      {
        const parent = spanElement.parentElement;
        const id = parseInt(parent.dataset.id);
        this.activeId = id;
        this.imagesContentComponent.showImageById(id);
        this.refresh();
      });
    });
  };

  public addIClickHandler = (photos: HTMLElement) =>
  {
    const ICollection = photos.querySelectorAll('i');
    const listArray = Array.from(ICollection);
    listArray.forEach(iElement =>
    {
      iElement.addEventListener('click', () =>
      {
        const parent = iElement.parentElement;
        const id = parseInt(parent.dataset.id);

        ImageService.remove(id).then(image =>
        {
          this.setActive();
        });
        this.imagesContentComponent.clear();
      });
    });
  };

  public template(): string
  {
    return `
              <div class="photo-list">
                     <ul class="photos" id="photos"></ul>
               </div>       
            `;
  }
}
