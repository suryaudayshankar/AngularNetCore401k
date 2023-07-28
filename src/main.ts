import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHNqVVhkW1pFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9iSHxSdkxjX31eeHNURg==;Mgo+DSMBPh8sVXJ0S0V+XE9AcVRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xSd0diWXZednZVT2NZUQ==;ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0RhWH9XcHJXR2BdU0Q=;NzY1MjcyQDMyMzAyZTMzMmUzMG9BOGlnSmU1aFRnTnRRWU1iUEVuZ0J1RzFEQVJRRVNkMzV0aVlaMGxSaHc9;NzY1MjczQDMyMzAyZTMzMmUzMFNnWDF3b2pxZVlHaWUyeFg0QWNEczgwK003ZFZLbWNTalJMR0wwdnp3N3M9;NRAiBiAaIQQuGjN/V0Z+X09EaFtFVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdERiW35eeXRTRGFfVUF2;NzY1Mjc1QDMyMzAyZTMzMmUzMGJIOTVtejFIRk4vc0FPK1dZRUNxY1cxcUFDZUZZMnBCck5sVUthQ09ycXc9;NzY1Mjc2QDMyMzAyZTMzMmUzMFRwdkNRcnN6bnVDOXM5ZkEzSWxYRFVWcVRIZjAwYkxjalR1bmdURnB5c289;Mgo+DSMBMAY9C3t2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0RhWH9XcHJXR2ZfU0Q=;NzY1Mjc4QDMyMzAyZTMzMmUzMFpxak50WGdsMU1jcnozdzN1RDM3RTdydG4yaDY5amRXdlVzaXZLNmxTMEE9;NzY1Mjc5QDMyMzAyZTMzMmUzMEZxYnJKaW5GcVlKWU1zMGdMdmY0TmNqc1E1T3pnbysyWmpDc3Z5eXo4cXM9;NzY1MjgwQDMyMzAyZTMzMmUzMGJIOTVtejFIRk4vc0FPK1dZRUNxY1cxcUFDZUZZMnBCck5sVUthQ09ycXc9');



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
