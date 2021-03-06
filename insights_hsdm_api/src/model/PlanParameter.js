/**
 * Insights Service Catalog API
 * This is a API to fetch and order catalog items from different cloud sources
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The PlanParameter model module.
* @module model/PlanParameter
* @version 1.0.0
*/
export default class PlanParameter {
    /**
    * Constructs a new <code>PlanParameter</code>.
    * @alias module:model/PlanParameter
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PlanParameter</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PlanParameter} obj Optional instance to populate.
    * @return {module:model/PlanParameter} The populated <code>PlanParameter</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlanParameter();

            
            
            

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'String');
            }
            if (data.hasOwnProperty('pattern')) {
                obj['pattern'] = ApiClient.convertToType(data['pattern'], 'String');
            }
            if (data.hasOwnProperty('example')) {
                obj['example'] = ApiClient.convertToType(data['example'], 'String');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('enum')) {
                obj['enum'] = ApiClient.convertToType(data['enum'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {String} type
    */
    type = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {String} default
    */
    default = undefined;
    /**
    * @member {String} pattern
    */
    pattern = undefined;
    /**
    * @member {String} example
    */
    example = undefined;
    /**
    * @member {Boolean} required
    */
    required = undefined;
    /**
    * @member {module:model/PlanParameter.FormatEnum} format
    */
    format = undefined;
    /**
    * @member {Array.<String>} enum
    */
    enum = undefined;






    /**
    * Allowed values for the <code>format</code> property.
    * @enum {String}
    * @readonly
    */
    static FormatEnum = {
    
        /**
         * value: "password"
         * @const
         */
        "password": "password",
    
        /**
         * value: "url"
         * @const
         */
        "url": "url",
    
        /**
         * value: "uuid"
         * @const
         */
        "uuid": "uuid"    
    };



}


