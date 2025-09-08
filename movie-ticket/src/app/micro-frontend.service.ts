import { loadRemoteModule } from '@angular-architects/native-federation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicroFrontendService {

  constructor() { }

  async loadRemoteComponent(remoteName: string) {
    try {
      return await loadRemoteModule({
        exposedModule: './Component',
        remoteName: remoteName,
        fallback: 'unauthorized'
      });
    } catch (err) {
      console.error(`Error loading ${remoteName} component: `, err);
      throw err;
    }
  }

}
