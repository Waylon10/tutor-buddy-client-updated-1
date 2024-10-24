/*
 * Student Tutor Booking Management System
 * This is a system allowing students and tutors to book in-person sessions at designated venues on campus.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: 222641495@mycput.ac.za
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.63
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from "../ApiClient";
import AdminDTO from '../model/AdminDTO';
import UserDTO from '../model/UserDTO';

/**
* Admin service.
* @module api/AdminApi
* @version 1.0.0
*/
export default class AdminApi {

    /**
    * Constructs a new AdminApi. 
    * @alias module:api/AdminApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the authenticateAdmin operation.
     * @callback moduleapi/AdminApi~authenticateAdminCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AdminDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * authenticate admin
     * Returns a single admin
     * @param {String} email email of the Admin
     * @param {String} password password of the Admin
     * @param {module:api/AdminApi~authenticateAdminCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    authenticateAdmin(email, password, callback) {
      
      let postBody = null;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling authenticateAdmin");
      }
      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling authenticateAdmin");
      }

      let pathParams = {
        'email': email,'password': password
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AdminDTO;

      return this.apiClient.callApi(
        '/admin/authenticate/{email}/{password}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createAdmin operation.
     * @callback moduleapi/AdminApi~createAdminCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AdminDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new admin
     * This can only be done by the admin.
     * @param {module:model/AdminDTO} body AdminDTO object that needs to be added to the system
     * @param {module:api/AdminApi~createAdminCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createAdmin(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createAdmin");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AdminDTO;

      return this.apiClient.callApi(
        '/admin', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createUser operation.
     * @callback moduleapi/AdminApi~createUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new user
     * This can only be done by the admin.
     * @param {module:model/UserDTO} body UserDTO object that needs to be added to the system
     * @param {module:api/AdminApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createUser(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createUser");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserDTO;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteAdmin operation.
     * @callback moduleapi/AdminApi~deleteAdminCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete admin
     * This can only be done by the admin.
     * @param {Number} adminId ID of user that needs to be deleted
     * @param {module:api/AdminApi~deleteAdminCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteAdmin(adminId, callback) {
      
      let postBody = null;
      // verify the required parameter 'adminId' is set
      if (adminId === undefined || adminId === null) {
        throw new Error("Missing the required parameter 'adminId' when calling deleteAdmin");
      }

      let pathParams = {
        'adminId': adminId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/admin/{adminId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback moduleapi/AdminApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete user
     * This can only be done by the admin.
     * @param {Number} userId ID of user that needs to be deleted
     * @param {module:api/AdminApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteUser(userId, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUser");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/users/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAdminById operation.
     * @callback moduleapi/AdminApi~getAdminByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AdminDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user by user ID
     * Returns a single user
     * @param {Number} adminId ID of admin to return
     * @param {module:api/AdminApi~getAdminByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAdminById(adminId, callback) {
      
      let postBody = null;
      // verify the required parameter 'adminId' is set
      if (adminId === undefined || adminId === null) {
        throw new Error("Missing the required parameter 'adminId' when calling getAdminById");
      }

      let pathParams = {
        'adminId': adminId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AdminDTO;

      return this.apiClient.callApi(
        '/admin/{adminId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllAdmins operation.
     * @callback moduleapi/AdminApi~getAllAdminsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AdminDTO>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all admin
     * Returns all admins in the system
     * @param {module:api/AdminApi~getAllAdminsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllAdmins(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AdminDTO];

      return this.apiClient.callApi(
        '/admin', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllUsers operation.
     * @callback moduleapi/AdminApi~getAllUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserDTO>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all users
     * Returns all users in the system
     * @param {module:api/AdminApi~getAllUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllUsers(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [UserDTO];

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getUserById operation.
     * @callback moduleapi/AdminApi~getUserByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user by user ID
     * Returns a single user
     * @param {Number} userId ID of user to return
     * @param {module:api/AdminApi~getUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getUserById(userId, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserById");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserDTO;

      return this.apiClient.callApi(
        '/users/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateAdmin operation.
     * @callback moduleapi/AdminApi~updateAdminCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AdminDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing admin
     * This can only be done by the admin.
     * @param {module:model/AdminDTO} body Updated user object
     * @param {Number} adminId ID of user that needs to be updated
     * @param {module:api/AdminApi~updateAdminCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateAdmin(body, adminId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateAdmin");
      }
      // verify the required parameter 'adminId' is set
      if (adminId === undefined || adminId === null) {
        throw new Error("Missing the required parameter 'adminId' when calling updateAdmin");
      }

      let pathParams = {
        'adminId': adminId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AdminDTO;

      return this.apiClient.callApi(
        '/admin/{adminId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback moduleapi/AdminApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing user
     * This can only be done by the admin.
     * @param {module:model/UserDTO} body Updated user object
     * @param {Number} userId ID of user that needs to be updated
     * @param {module:api/AdminApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateUser(body, userId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateUser");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUser");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserDTO;

      return this.apiClient.callApi(
        '/users/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}