import {
  GarageDoorUp,
  GarageDoorDown,
  GarageDoorStop,
  GarageDoorLightOn,
  GarageDoorLightOff,
} from './command/garageDoorCommand';
import { LightOffCommand, LightOnCommand } from './command/lightCommand';
import { Controller } from './controller';
import { GarageDoor, Light } from './devices';

describe('[Command - lab] Controller', () => {
  it('should execute device that wrapped with command object', () => {
    const controller = new Controller();

    const light = new Light();
    light.on = jest.fn();
    light.off = jest.fn();

    const lightOnCommand = new LightOnCommand(light);
    const lightOffCommand = new LightOffCommand(light);

    controller.execute(lightOnCommand);
    expect(light.on).toHaveBeenCalled();

    controller.execute(lightOffCommand);
    expect(light.off).toHaveBeenCalled();
  });

  it('should execute device that wrapped with command object', () => {
    const controller = new Controller();

    const door = new GarageDoor();
    door.up = jest.fn();
    door.down = jest.fn();
    door.stop = jest.fn();
    door.lightOn = jest.fn();
    door.lightOff = jest.fn();

    const garageDoorUp = new GarageDoorUp(door);
    const garageDoorDown = new GarageDoorDown(door);
    const garageDoorStop = new GarageDoorStop(door);
    const garageDoorLightOn = new GarageDoorLightOn(door);
    const garageDoorLightOff = new GarageDoorLightOff(door);

    controller.execute(garageDoorUp);
    expect(door.up).toHaveBeenCalled();

    controller.execute(garageDoorDown);
    expect(door.down).toHaveBeenCalled();

    controller.execute(garageDoorStop);
    expect(door.stop).toHaveBeenCalled();

    controller.execute(garageDoorLightOn);
    expect(door.lightOn).toHaveBeenCalled();

    controller.execute(garageDoorLightOff);
    expect(door.lightOff).toHaveBeenCalled();
  });
});
