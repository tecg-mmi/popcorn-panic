import {DrawFrame} from "../framework25/DrawFrame";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {iFrame} from "../framework25/types/iFrame";

export class Projectile extends DrawFrame implements iAnimatable {
    shouldBeRemoved: boolean = false;


    constructor(ctx: CanvasRenderingContext2D, sprite: HTMLImageElement, frame: iFrame, rotation: number) {
        super(ctx, sprite, frame, rotation);

    }

    animate(): void {

    }


}