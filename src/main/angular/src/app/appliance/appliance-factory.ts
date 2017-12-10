/*
Copyright (C) 2017 Axel Müller <axel.mueller@avanux.de>

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/

import {Appliance} from './appliance';
import {ApplianceHeader} from './appliance-header';
import {ApplianceStatus} from './appliance-status';

export class ApplianceFactory {

  static createEmptyAppliance(): Appliance {
    return new Appliance();
  }

  static toApplianceHeaderFromJSON(rawApplianceHeader: any): ApplianceHeader {
    console.log('ApplianceHeader (JSON)' + JSON.stringify(rawApplianceHeader));
    const applianceHeader = new ApplianceHeader();
    applianceHeader.id = rawApplianceHeader.id;
    applianceHeader.name = rawApplianceHeader.name;
    applianceHeader.vendor = rawApplianceHeader.vendor;
    applianceHeader.type = rawApplianceHeader.type;
    applianceHeader.controllable = rawApplianceHeader.controllable;
    console.log('ApplianceHeader (TYPE)' + JSON.stringify(applianceHeader));
    return applianceHeader;
  }

  static toApplianceStatusFromJSON(rawApplianceHeader: any): ApplianceStatus {
    console.log('ApplianceStatus (JSON)' + JSON.stringify(rawApplianceHeader));
    const applianceStatus = new ApplianceStatus();
    applianceStatus.id = rawApplianceHeader.id;
    applianceStatus.name = rawApplianceHeader.name;
    applianceStatus.vendor = rawApplianceHeader.vendor;
    applianceStatus.type = rawApplianceHeader.type;
    applianceStatus.statusChangedAt = rawApplianceHeader.statusChangedAt;
    applianceStatus.remainingMinRunningTime = rawApplianceHeader.remainingMinRunningTime;
    applianceStatus.remainingMaxRunningTime = rawApplianceHeader.remainingMaxRunningTime;
    applianceStatus.planningRequested = rawApplianceHeader.planningRequested;
    applianceStatus.earliestStartPassed = rawApplianceHeader.earliestStartPassed;
    applianceStatus.on = rawApplianceHeader.on;
    applianceStatus.controllable = rawApplianceHeader.controllable;
    console.log('ApplianceStatus (TYPE)' + JSON.stringify(applianceStatus));
    return applianceStatus;
  }

  static toApplianceFromJSON(applianceInfo: any): Appliance {
    console.log('Appliance (JSON)' + JSON.stringify(applianceInfo));
    const appliance = new Appliance();
    appliance.id = applianceInfo.id;
    appliance.name = applianceInfo.name;
    appliance.vendor = applianceInfo.vendor;
    appliance.serial = applianceInfo.serial;
    appliance.type = applianceInfo.type;

    appliance.maxPowerConsumption = applianceInfo.maxPowerConsumption;
    appliance.currentPowerMethod = applianceInfo.currentPowerMethod;
    appliance.interruptionsAllowed = applianceInfo.interruptionsAllowed;

    console.log('Appliance (TYPE)' + JSON.stringify(appliance));
    return appliance;
  }

  static toJSONfromApplianceInfo(appliance: Appliance): String {
    return JSON.stringify(appliance);
  }
}