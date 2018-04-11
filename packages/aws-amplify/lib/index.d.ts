import Auth, { AuthClass } from './Auth';
import API, { APIClass } from './API';
import { ConsoleLogger as Logger } from './Common';
export default class Amplify {
    static Auth: AuthClass;
    static API: APIClass;
    static Logger: any;
    static configure(config: any): any;
    static addPluggable(pluggable: any): void;
}
export { Auth, API, Logger };
export { AuthClass, APIClass };
