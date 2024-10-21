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
import BookingDTO from '../model/BookingDTO';

/**
* Booking service.
* @module api/BookingApi
* @version 1.0.0
*/
export default class BookingApi {

    /**
    * Constructs a new BookingApi. 
    * @alias module:api/BookingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createBooking operation.
     * @callback moduleapi/BookingApi~createBookingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BookingDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new booking
     * This can only be done by the student.
     * @param {module:model/BookingDTO} body BookingDTO object that needs to be added to the system
     * @param {module:api/BookingApi~createBookingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createBooking(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createBooking");
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
      let returnType = BookingDTO;

      return this.apiClient.callApi(
        '/booking', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteBooking operation.
     * @callback moduleapi/BookingApi~deleteBookingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Booking by ID
     * Deletes a booking
     * @param {Number} bookingId ID of booking to return
     * @param {module:api/BookingApi~deleteBookingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteBooking(bookingId, callback) {
      
      let postBody = null;
      // verify the required parameter 'bookingId' is set
      if (bookingId === undefined || bookingId === null) {
        throw new Error("Missing the required parameter 'bookingId' when calling deleteBooking");
      }

      let pathParams = {
        'bookingId': bookingId
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
        '/booking/{bookingId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllBookings operation.
     * @callback moduleapi/BookingApi~getAllBookingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BookingDTO>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all bookings
     * Returns all bookings in the system
     * @param {module:api/BookingApi~getAllBookingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllBookings(callback) {
      
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
      let returnType = [BookingDTO];

      return this.apiClient.callApi(
        '/booking', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllBookingsByLocation operation.
     * @callback moduleapi/BookingApi~getAllBookingsByLocationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BookingDTO>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all bookings for a particular location
     * Returns all bookings for a location in the system
     * @param {Number} locationId Id of the Location
     * @param {module:api/BookingApi~getAllBookingsByLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllBookingsByLocation(locationId, callback) {
      
      let postBody = null;
      // verify the required parameter 'locationId' is set
      if (locationId === undefined || locationId === null) {
        throw new Error("Missing the required parameter 'locationId' when calling getAllBookingsByLocation");
      }

      let pathParams = {
        'locationId': locationId
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
      let returnType = [BookingDTO];

      return this.apiClient.callApi(
        '/booking/location/{locationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllBookingsByStudent operation.
     * @callback moduleapi/BookingApi~getAllBookingsByStudentCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BookingDTO>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all bookings for a particular student
     * Returns all bookings for a student in the system
     * @param {Number} studentId Id of the student
     * @param {module:api/BookingApi~getAllBookingsByStudentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllBookingsByStudent(studentId, callback) {
      
      let postBody = null;
      // verify the required parameter 'studentId' is set
      if (studentId === undefined || studentId === null) {
        throw new Error("Missing the required parameter 'studentId' when calling getAllBookingsByStudent");
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
      let returnType = [BookingDTO];

      return this.apiClient.callApi(
        '/booking/student/{studentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllBookingsBySubject operation.
     * @callback moduleapi/BookingApi~getAllBookingsBySubjectCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BookingDTO>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all bookings for a particular subject
     * Returns all bookings for a subject in the system
     * @param {Number} subjectId Id of the subject
     * @param {module:api/BookingApi~getAllBookingsBySubjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllBookingsBySubject(subjectId, callback) {
      
      let postBody = null;
      // verify the required parameter 'subjectId' is set
      if (subjectId === undefined || subjectId === null) {
        throw new Error("Missing the required parameter 'subjectId' when calling getAllBookingsBySubject");
      }

      let pathParams = {
        'subjectId': subjectId
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
      let returnType = [BookingDTO];

      return this.apiClient.callApi(
        '/booking/subject/{subjectId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllBookingsByTutor operation.
     * @callback moduleapi/BookingApi~getAllBookingsByTutorCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BookingDTO>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all bookings for a particular tutor
     * Returns all bookings for a tutor in the system
     * @param {Number} tutorId Id of the tutor
     * @param {module:api/BookingApi~getAllBookingsByTutorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllBookingsByTutor(tutorId, callback) {
      
      let postBody = null;
      // verify the required parameter 'tutorId' is set
      if (tutorId === undefined || tutorId === null) {
        throw new Error("Missing the required parameter 'tutorId' when calling getAllBookingsByTutor");
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
      let returnType = [BookingDTO];

      return this.apiClient.callApi(
        '/booking/tutor/{tutorId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBookingById operation.
     * @callback moduleapi/BookingApi~getBookingByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BookingDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get booking by ID
     * Returns a single booking
     * @param {Number} bookingId ID of booking to return
     * @param {module:api/BookingApi~getBookingByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getBookingById(bookingId, callback) {
      
      let postBody = null;
      // verify the required parameter 'bookingId' is set
      if (bookingId === undefined || bookingId === null) {
        throw new Error("Missing the required parameter 'bookingId' when calling getBookingById");
      }

      let pathParams = {
        'bookingId': bookingId
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
      let returnType = BookingDTO;

      return this.apiClient.callApi(
        '/booking/{bookingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateBooking operation.
     * @callback moduleapi/BookingApi~updateBookingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BookingDTO{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a new booking
     * This can only be done by the student.
     * @param {module:model/BookingDTO} body BookingDTO object that needs to be updated on the system
     * @param {Number} bookingId ID of booking to return
     * @param {module:api/BookingApi~updateBookingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateBooking(body, bookingId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateBooking");
      }
      // verify the required parameter 'bookingId' is set
      if (bookingId === undefined || bookingId === null) {
        throw new Error("Missing the required parameter 'bookingId' when calling updateBooking");
      }

      let pathParams = {
        'bookingId': bookingId
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
      let returnType = BookingDTO;

      return this.apiClient.callApi(
        '/booking/{bookingId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}