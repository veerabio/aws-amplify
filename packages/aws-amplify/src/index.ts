/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

import Auth, { AuthClass } from './Auth';
import API, { APIClass } from './API';
import { ConsoleLogger as Logger } from './Common';

const logger = new Logger('Amplify');

export default class Amplify {
    static Auth: AuthClass = null;
    static API: APIClass = null;

    static Logger = null;

    static configure(config) {
        if (!config) { return; }
        Auth.configure(config);
        API.configure(config);

        return config;
    }

    static addPluggable(pluggable) {
        if (pluggable && pluggable['getCategory'] && typeof pluggable['getCategory'] === 'function') {
            const category = pluggable.getCategory();
            switch(category) {
                case 'Analytics':
                    break;
                case 'Auth':
                    break;
                case 'API':
                    break;
                case 'Cache':
                    break;
                case 'Storage':
                    break;
                case 'PubSub':
                    break;
                default:
                    break;
            }
        }
    }
}

Amplify.Auth = Auth;
Amplify.API = API;
Amplify.Logger = Logger;

export { Auth, API, Logger };
export { AuthClass, APIClass };
