import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/mainComponent';
import { Jquery } from '../libreris/common';

Jquery().then(jquery =>
{
  console.log('jquery', jquery);
});

export class AppComponent
{
  private _authComponent = new AuthComponent();
  private _mainComponent = new MainComponent();

  public render(): void
  {
    document.getElementById('auth-root').innerHTML = this._authComponent.template();
    document.getElementById('main-root').innerHTML = this._mainComponent.template();
  }
}