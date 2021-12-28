import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ScreenService {
    private resizeSource = new Subject<null>();
    public resize$ = this.resizeSource.asObservable();

    largePixels = 780;
    screenWidth: number;
    screenHeight: number;

    constructor() {
        try {
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
            window.addEventListener('resize', (event) => this.onResize(event));
        } catch (e) {
            console.error(e);
        } finally {
            this.screenWidth = 0;
            this.screenHeight = 0;
        }
    }

    onResize(event: Event) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        this.resizeSource.next();
    }

    isLarge(): boolean {
        return this.screenWidth >= this.largePixels;
    }
}
