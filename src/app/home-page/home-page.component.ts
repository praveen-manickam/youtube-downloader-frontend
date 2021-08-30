import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { NgForm } from '@angular/forms';
import io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  videoData: any = <any>{};
  progress: number = 0;
  fileLocation: string | undefined;
  downloaded: boolean = false;
  jobId: string | undefined;
  connected: boolean = false;
  socket: any = <any>{};
  getVideoSub: any = <any>{};
constructor(
    private videoService: VideoService
  ) { }
ngOnInit() {
      this.addConnectionHandlers();
  }
  addConnectionHandlers() {
    const manager = io(environment.socketIoUrl);
    manager.on('connect_error', () => {
      this.socket = io(environment.socketIoUrl);
    });
      this.socket = io(environment.socketIoUrl);
    this.socket.on('connect', (data: any) => {
      this.socket.on('connected', (msg: any) => {
        console.log(data, msg)
});
      this.socket.on('progress', (msg: any) => {
        if (this.jobId != msg.jobId) {
          console.log("--00000-0-0-0-0", msg)
          return;
        }
        this.progress = msg.progress;
        console.log("=-==-", this.progress)
        if (msg.progress == 100) {
          this.progress = 0;
        }
      });
      this.socket.on('videoDone', (msg:any) => {
        if (this.jobId != msg.jobId || this.downloaded) {
          return;
        }
        this.getVideoSub = this.videoService.getVideo(`${environment.apiUrl}/jobs/file/${msg.fileLocation}`)
          .subscribe(res => {
            if (!this.downloaded) {
              saveAs(res, `${msg.fileLocation}.mp4`);
              this.progress = 0;
              this.downloaded = true;
              this.getVideoSub.unsubscribe();
            }
          })
      });
    });
  }
  addVideoToQueue(videoForm: NgForm) {
    this.downloaded = false;
    if (videoForm.invalid) {
      return;
    }
    this.videoService.addVideoToQueue(this.videoData)
      .subscribe(res => {
        console.log("=-=-==djfd", (res as any)._id)
        this.jobId = (res as any)._id;
      }, err => {
        alert('Invalid URL');
      })
  }
}