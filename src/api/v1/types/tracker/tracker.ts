import { Address, AddressId } from '../address';

export interface Tracker {
    carrier_tracking_no: string;
    carrier: string[];
    to?: (Address | AddressId);
    from?:(Address | AddressId); 
}

