import { IComponent } from '../../types';
import { formContent } from '../../controls/controls';
import { Component } from '../../../libreris/component';
import { Patterns } from '../../../libreris/common';

@Component
export class ImagesUrlComponent implements IComponent
{
  private handleSubmit = (formValues: object) =>
  {

  };

  public template(): string
  {
    const content = ` <div class="flex">                    
                        <div class="col-3">
                        <input class="effect-7" id="url-photo" type="text" name="url" value="" placeholder="Url image.." required pattern="${Patterns.ImageUrl}">
                            <span class="focus-border">
                              <i></i>
                            </span>
                        </div>
                      </div>
                      <div class="flex">  
                        <div class="col-3">
                            <input class="effect-7" id="url-name"  type="text" name="name" value="" placeholder="Image name.." required pattern="${Patterns.Name}">
                              <span class="focus-border">
                                <i></i>
                              </span>
                        </div>
                        <div class="col-3">
                          <input class="effect-7" id="submit" type="submit" value="Save" required>
                            <span class="focus-border">
                              <i></i>
                            </span>
                        </div>      
                      </div>
                   `;
    return formContent(content, this.handleSubmit);
  }
}