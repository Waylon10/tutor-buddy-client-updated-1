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
import ApiClient from '../ApiClient';

/**
 * The AdminDTO model module.
 * @module model/AdminDTO
 * @version 1.0.0
 */
export default class AdminDTO {
  /**
   * Constructs a new <code>AdminDTO</code>.
   * @alias module:model/AdminDTO
   * @class
   * @param name {String} 
   * @param lastName {String} 
   * @param email {String} 
   * @param phoneNumber {String} 
   * @param password {String} 
   */
  constructor(name, lastName, email, phoneNumber, password) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
  }

  /**
   * Constructs a <code>AdminDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdminDTO} obj Optional instance to populate.
   * @return {module:model/AdminDTO} The populated <code>AdminDTO</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AdminDTO();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('phoneNumber'))
        obj.phoneNumber = ApiClient.convertToType(data['phoneNumber'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('profilePicture'))
        obj.profilePicture = ApiClient.convertToType(data['profilePicture'], 'Blob');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
AdminDTO.prototype.id = undefined;

/**
 * @member {String} name
 */
AdminDTO.prototype.name = undefined;

/**
 * @member {String} lastName
 */
AdminDTO.prototype.lastName = undefined;

/**
 * @member {String} email
 */
AdminDTO.prototype.email = undefined;

/**
 * @member {String} phoneNumber
 */
AdminDTO.prototype.phoneNumber = undefined;

/**
 * @member {String} password
 */
AdminDTO.prototype.password = undefined;

/**
 * @member {Blob} profilePicture
 */
AdminDTO.prototype.profilePicture = undefined;

