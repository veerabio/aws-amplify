"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Auth_1 = require("./Auth");
exports.Auth = Auth_1.default;
exports.AuthClass = Auth_1.AuthClass;
var API_1 = require("./API");
exports.API = API_1.default;
exports.APIClass = API_1.APIClass;
var Common_1 = require("./Common");
exports.Logger = Common_1.ConsoleLogger;
var logger = new Common_1.ConsoleLogger('Amplify');
var Amplify = /** @class */ (function () {
    function Amplify() {
    }
    Amplify.configure = function (config) {
        if (!config) {
            return;
        }
        Auth_1.default.configure(config);
        API_1.default.configure(config);
        return config;
    };
    Amplify.addPluggable = function (pluggable) {
        if (pluggable && pluggable['getCategory'] && typeof pluggable['getCategory'] === 'function') {
            var category = pluggable.getCategory();
            switch (category) {
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
    };
    Amplify.Auth = null;
    Amplify.API = null;
    Amplify.Logger = null;
    return Amplify;
}());
exports.default = Amplify;
Amplify.Auth = Auth_1.default;
Amplify.API = API_1.default;
Amplify.Logger = Common_1.ConsoleLogger;
//# sourceMappingURL=index.js.map