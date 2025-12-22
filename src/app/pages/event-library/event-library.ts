import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Galleria,GalleriaModule, } from 'primeng/galleria';
import { Master } from '../../services/master';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-event-library',
  imports: [GalleriaModule,ButtonModule],
  templateUrl: './event-library.html',
  styleUrl: './event-library.css',
})
export class EventLibrary  implements OnInit, OnDestroy {

    images: any[] | undefined;

    showThumbnails: boolean = false;

    fullscreen: boolean = false;

    activeIndex: number = 0;

    isAutoPlay: boolean = true;

    onFullScreenListener: any;

    get galleriaPT() {
        return {
            root: {
                class: [{ 'flex flex-col': this.fullscreen }]
            },
            content: {
                class: ['relative', { 'flex-1 justify-center': this.fullscreen }]
            },
            thumbnails: 'absolute w-full left-0 bottom-0'
        };
    }

    @ViewChild('galleria') galleria: Galleria | undefined;

    constructor(@Inject(PLATFORM_ID) private platformId: any, private photoService: Master, private cd: ChangeDetectorRef) {}

    responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
        this.bindDocumentListeners();
    }

    onThumbnailButtonClick() {
        this.showThumbnails = !this.showThumbnails;
    }

    toggleAutoSlide() {
        this.isAutoPlay = !this.isAutoPlay;
    }

    toggleFullScreen() {
        if (this.fullscreen) {
            this.closePreviewFullScreen();
        } else {
            this.openPreviewFullScreen();
        }

        this.cd.detach();
    }

    openPreviewFullScreen() {
        let elem = this.galleria?.element.nativeElement.querySelector('.p-galleria');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem['mozRequestFullScreen']) {
            /* Firefox */
            elem['mozRequestFullScreen']();
        } else if (elem['webkitRequestFullscreen']) {
            /* Chrome, Safari & Opera */
            elem['webkitRequestFullscreen']();
        } else if (elem['msRequestFullscreen']) {
            /* IE/Edge */
            elem['msRequestFullscreen']();
        }
    }

    onFullScreenChange() {
        this.fullscreen = !this.fullscreen;
        this.cd.detectChanges();
        this.cd.reattach();
    }

    closePreviewFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } 
        // else if (document['mozCancelFullScreen']) {
        //     document['mozCancelFullScreen']();
        // } else if (document['webkitExitFullscreen']) {
        //     document['webkitExitFullscreen']();
        // } else if (document['msExitFullscreen']) {
        //     document['msExitFullscreen']();
        // }
    }

    bindDocumentListeners() {
        this.onFullScreenListener = this.onFullScreenChange.bind(this);
        document.addEventListener('fullscreenchange', this.onFullScreenListener);
        document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
        document.addEventListener('webkitfullscreenchange', this.onFullScreenListener);
        document.addEventListener('msfullscreenchange', this.onFullScreenListener);
    }

    unbindDocumentListeners() {
        document.removeEventListener('fullscreenchange', this.onFullScreenListener);
        document.removeEventListener('mozfullscreenchange', this.onFullScreenListener);
        document.removeEventListener('webkitfullscreenchange', this.onFullScreenListener);
        document.removeEventListener('msfullscreenchange', this.onFullScreenListener);
        this.onFullScreenListener = null;
    }

    ngOnDestroy() {
        this.unbindDocumentListeners();
    }

    slideButtonIcon() {
        return this.isAutoPlay ? 'pi pi-pause' : 'pi pi-play';
    }

    fullScreenIcon() {
        return `pi ${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
    }
}