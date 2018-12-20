import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/mainComponent';

// Jquery().then(jquery =>
// {
//   console.log('jquery1', jquery);
// });

// Jquery(t);
//
// export function t(jquery)
// {
//   console.log('jquery1', jquery);
// }
// test().then(image =>
// {
//   console.log('then', image);
// });

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