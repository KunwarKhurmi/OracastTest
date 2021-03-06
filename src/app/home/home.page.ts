import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../api/profile.service';
import { LoadingService } from '../utils/loading.service';
import { VersionCodeService } from '../utils/version-code.service';

import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profileDetails;
  imgUrl: any;
  firstName: any;
  lastName: any;
  email: any;
  appVersion: any;


  constructor(public profileService : ProfileService, public loadingService: LoadingService, 
              public versionCodeService: VersionCodeService) { }


  ionViewWillEnter(){  // ngOnInit can also be used
    this.GetProfileData();
  }

  GetProfileData(){
    this.loadingService.loadingPresent(); // loading component

    this.profileService.GetProfile().subscribe((data)=> {  // api service call
      this.profileDetails = data;                          // response from api call
      this.imgUrl =  this.profileDetails.results[0].picture.large; // extracting exact data
      this.firstName = this.profileDetails.results[0].name.first;
      this.lastName = this.profileDetails.results[0].name.last;
      this.email = this.profileDetails.results[0].email;
    }, error => {  // error handling

      this.loadingService.loadingDismiss();
      this.firstName = "Error! Please try again!";
      console.log(error);

    }, () =>{   // on completetion

      this.loadingService.loadingDismiss();
      console.log('complete!');
    });
  }

  doRefresh(event) { // swipe down to refresh 
    this.GetProfileData(); // api data service call
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

 getAppVersion() {
    this.versionCodeService.getDeviceInfo().then((version) => {
        console.log(version);
    });
  }

}
