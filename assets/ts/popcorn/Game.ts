import {settings} from "./settings";
import {Projectile} from "./Projectile";
import {Animation} from "../framework25/Animation";

export class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private sprite: HTMLImageElement;
    private animation: Animation;

    constructor() {
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.animation = new Animation(this.canvas, this.ctx);
        this.sprite = new Image();
        this.sprite.src = settings.sprite;
        this.sprite.addEventListener('load', () => {

        })
        this.generatePopcorns();
    }

    private generatePopcorns() {
        for (let i = 0; i < settings.popcorns.length; i++) {
            this.animation.registeriAnimatable(new Projectile(this.ctx, this.sprite, settings.popcorns[i], 0));
        }
    }
}