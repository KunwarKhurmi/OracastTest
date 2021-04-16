import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Device } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class VersionCodeService {

  constructor() { }

  async getDeviceInfo() {
    const info =  await Device.getInfo();
    return  info.model;
  }
}
