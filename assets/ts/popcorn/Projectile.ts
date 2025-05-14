import {DrawFrame} from "../framework25/DrawFrame";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {iFrame} from "../framework25/types/iFrame";
import {Vector} from "../framework25/Vector";
import {randomFloat, randomInt} from "../framework25/helpers/random";
import {settings} from "./settings";

export class Projectile extends DrawFrame implements iAnimatable {
    shouldBeRemoved: boolean;
    private direction: number;
    private hiddenNumber: number;
    private speed: Vector;
    private acceleration: Vector;
    private clockWise: Boolean;
    private position: Vector;
    private canvas: HTMLCanvasElement;


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement, frame: iFrame, rotation: number, hiddenNumber: number) {
        super(ctx, sprite, frame, rotation);
        this.shouldBeRemoved = false;
        this.hiddenNumber = hiddenNumber;
        this.canvas = canvas;

        this.initRandomValues();

    }

    private initRandomValues() {
        this.clockWise = Math.random() > 0.5;
        this.speed = Vector.fromAngle(
            randomFloat(settings.projectiles.angle.min, settings.projectiles.angle.max),
            randomInt(settings.projectiles.magnitude.min, settings.projectiles.magnitude.max)
        );

        this.position = new Vector({
            y: this.canvas.height + this.frame.dh / 2,
            x: randomInt(this.frame.dw / 2, this.canvas.width - this.frame.dw)
        });

        this.acceleration = new Vector({
            x: 0,
            y: randomFloat(settings.projectiles.acceleration.min, settings.projectiles.acceleration.max),
        })
    }

    animate(): void {
        if (this.position.y > this.canvas.height + this.frame.dh) {
            this.initRandomValues();
        }

        this.speed.add(this.acceleration);
        this.position.add(this.speed);

        if (this.clockWise) {
            this.rotation += settings.projectiles.rotation;
        } else {
            this.rotation -= settings.projectiles.rotation;

        }

        this.frame.dx = this.position.x;
        this.frame.dy = this.position.y;


        this.draw();
    }

}