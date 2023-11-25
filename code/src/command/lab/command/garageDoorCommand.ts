import { GarageDoor } from '../devices';
import { Command } from './command';

export class GarageDoorUp implements Command {
  constructor(private door: GarageDoor) {}
  public execute(): void {
    this.door.up();
  }
}

export class GarageDoorDown implements Command {
  constructor(private door: GarageDoor) {}
  public execute(): void {
    this.door.down();
  }
}

export class GarageDoorStop implements Command {
  constructor(private door: GarageDoor) {}
  public execute(): void {
    this.door.stop();
  }
}

export class GarageDoorLightOn implements Command {
  constructor(private door: GarageDoor) {}
  public execute(): void {
    this.door.lightOn();
  }
}

export class GarageDoorLightOff implements Command {
  constructor(private door: GarageDoor) {}
  public execute(): void {
    this.door.lightOff();
  }
}
