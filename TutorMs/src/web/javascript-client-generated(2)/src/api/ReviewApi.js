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
import ReviewDTO from '../model/ReviewDTO';

/**
* Review service.
* @module api/ReviewApi
* @version 1.0.0
*/
export default class ReviewApi {

    /**
    * Constructs a new ReviewApi. 
    * @alias module:api/ReviewApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addReview operation.
     * @callback moduleapi/ReviewApi~addReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReviewDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add review
     * This can only be done by the student.
     * @param {module:model/ReviewDTO} body ReviewDTO object that needs to be added to the system
     * @param {module:api/ReviewApi~addReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addReview(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addReview");
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
      let returnType = ReviewDTO;

      return this.apiClient.callApi(
        '/review', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteReview operation.
     * @callback moduleapi/ReviewApi~deleteReviewCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete existing review
     * deletes based on Id provided
     * @param {Number} reviewId id of review to delete
     * @param {module:api/ReviewApi~deleteReviewCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteReview(reviewId, callback) {
      
      let postBody = null;
      // verify the required parameter 'reviewId' is set
      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling deleteReview");
      }

      let pathParams = {
        'reviewId': reviewId
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
        '/review/{reviewId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllReviews operation.
     * @callback moduleapi/ReviewApi~getAllReviewsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ReviewDTO>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all reviews
     * Returns all admins in the system
     * @param {module:api/ReviewApi~getAllReviewsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllReviews(callback) {
      
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
      let returnType = [ReviewDTO];

      return this.apiClient.callApi(
        '/review', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllReviewsByStudent operation.
     * @callback moduleapi/ReviewApi~getAllReviewsByStudentCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ReviewDTO>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all reviews for a particular student
     * Returns all reviews for a student in the system
     * @param {Number} studentId Id of the student
     * @param {module:api/ReviewApi~getAllReviewsByStudentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllReviewsByStudent(studentId, callback) {
      
      let postBody = null;
      // verify the required parameter 'studentId' is set
      if (studentId === undefined || studentId === null) {
        throw new Error("Missing the required parameter 'studentId' when calling getAllReviewsByStudent");
      }

      let pathParams = {
        'studentId': studentId
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
      let returnType = [ReviewDTO];

      return this.apiClient.callApi(
        '/review/student/{studentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllReviewsByTutor operation.
     * @callback moduleapi/ReviewApi~getAllReviewsByTutorCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ReviewDTO>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all reviews for a particular tutor
     * Returns all reviews for a tutor in the system
     * @param {Number} tutorId Id of the tutor
     * @param {module:api/ReviewApi~getAllReviewsByTutorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllReviewsByTutor(tutorId, callback) {
      
      let postBody = null;
      // verify the required parameter 'tutorId' is set
      if (tutorId === undefined || tutorId === null) {
        throw new Error("Missing the required parameter 'tutorId' when calling getAllReviewsByTutor");
      }

      let pathParams = {
        'tutorId': tutorId
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
      let returnType = [ReviewDTO];

      return this.apiClient.callApi(
        '/review/tutor/{tutorId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getReview operation.
     * @callback moduleapi/ReviewApi~getReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReviewDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get review by Id
     * Fetches data about a particular review
     * @param {Number} reviewId Id of review to fetch
     * @param {module:api/ReviewApi~getReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getReview(reviewId, callback) {
      
      let postBody = null;
      // verify the required parameter 'reviewId' is set
      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling getReview");
      }

      let pathParams = {
        'reviewId': reviewId
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
      let returnType = ReviewDTO;

      return this.apiClient.callApi(
        '/review/{reviewId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateReview operation.
     * @callback moduleapi/ReviewApi~updateReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReviewDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update existing review
     * Updates based on ID provided in path
     * @param {module:model/ReviewDTO} body 
     * @param {Number} reviewId ID of review to update
     * @param {module:api/ReviewApi~updateReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateReview(body, reviewId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateReview");
      }
      // verify the required parameter 'reviewId' is set
      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling updateReview");
      }

      let pathParams = {
        'reviewId': reviewId
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
      let returnType = ReviewDTO;

      return this.apiClient.callApi(
        '/review/{reviewId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}