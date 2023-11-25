import { PackageType } from './billing';
import { FixedPackage } from './fixedPackage';
import { HourFlexPackage } from './hourFlexPackage';
import { SteppingPackage } from './strppingPackage';

export class PackageFactory {
  static createPackage(type: PackageType) {
    switch (type) {
      case PackageType.FIXED:
        return new FixedPackage();
      case PackageType.STEPPING:
        return new SteppingPackage();
      case PackageType.HOUR_FLEX:
        return new HourFlexPackage();
      default:
        return new UnknowPackage();
    }
  }
}

export class UnknowPackage {
  monthlyBill(totalHours: number): number {
    return 0;
  }
}
