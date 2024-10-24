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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StudentTutorBookingManagementSystem);
  }
}(this, function(expect, StudentTutorBookingManagementSystem) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ReviewDTO', function() {
      beforeEach(function() {
        instance = new StudentTutorBookingManagementSystem.ReviewDTO();
      });

      it('should create an instance of ReviewDTO', function() {
        // TODO: update the code to test ReviewDTO
        expect(instance).to.be.a(StudentTutorBookingManagementSystem.ReviewDTO);
      });

      it('should have the property reviewId (base name: "reviewId")', function() {
        // TODO: update the code to test the property reviewId
        expect(instance).to.have.property('reviewId');
        // expect(instance.reviewId).to.be(expectedValueLiteral);
      });

      it('should have the property tutorId (base name: "tutorId")', function() {
        // TODO: update the code to test the property tutorId
        expect(instance).to.have.property('tutorId');
        // expect(instance.tutorId).to.be(expectedValueLiteral);
      });

      it('should have the property rating (base name: "rating")', function() {
        // TODO: update the code to test the property rating
        expect(instance).to.have.property('rating');
        // expect(instance.rating).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property studentId (base name: "studentId")', function() {
        // TODO: update the code to test the property studentId
        expect(instance).to.have.property('studentId');
        // expect(instance.studentId).to.be(expectedValueLiteral);
      });

    });
  });

}));
