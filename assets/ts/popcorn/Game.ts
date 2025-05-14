import {settings} from "./settings";
import {Animation} from "../framework25/Animation";
import {Projectile} from "./Projectile";

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
        this.generatePopcorns();
        this.generateCorns();
        console.log(this.animation.iAnimatables);
        this.sprite.addEventListener("load", () => {
            this.animation.start();
        })
    }

    private generatePopcorns() {
        for (let i = 0; i < settings.popcorns.length; i++) {
            this.animation.registeriAnimatable(new Projectile(this.ctx, this.canvas, this.sprite, settings.popcorns[i], 0, i));
        }


    }

    private generateCorns() {
        for (let i = 0; i < settings.corns.length; i++) {
            this.animation.registeriAnimatable(new Projectile(this.ctx, this.canvas, this.sprite, settings.corns[i], 0, -1));
        }
    }
}