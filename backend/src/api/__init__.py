import os
from flask import Flask, request, jsonify, abort
from sqlalchemy import exc
import json
from flask_cors import CORS

from auth.auth import AuthError, requires_auth
from Email.email_sender import send_email

def create_app():
    app = Flask(__name__)
    setup_db(app)
    CORS(app)

    '''
    @TODO uncomment the following line to initialize the datbase
    !! NOTE THIS WILL DROP ALL RECORDS AND START YOUR DB FROM SCRATCH
    !! NOTE THIS MUST BE UNCOMMENTED ON FIRST RUN
    '''
    # db_drop_and_create_all()

    ## ROUTES

    @app.route("/")
    def home():
        return "this is home route"



    # recipient_email = '396679670@qq.com'
    # update project info
    @app.route('/projects/<project_id>/invitation', methods = ['POST'])
    # @requires_auth('patch:projects')  
    def send_email_invitation(project_id):
        data = request.get_json()
        # sender_name = body.get('sender_name', None)
        # recipient_email = body.get('recipient_email', None)
        # project_name = body.get('project_name', None)
        r = send_email(data['From'], data['To'], data['Subject'], data['Body'])
        return jsonify (r)




    ## Error Handling

    @app.errorhandler(422)
    def unprocessable(error):
        return jsonify({
                        "success": False, 
                        "error": 422,
                        "message": "unprocessable"
                        }), 422

    '''
    TODO implement error handlers using the @app.errorhandler(error) decorator
        each error handler should return (with approprate messages):
                jsonify({
                        "success": False, 
                        "error": 404,
                        "message": "resource not found"
                        }), 404

    '''

    '''
    TODO implement error handler for 404
        error handler should conform to general task above 
    '''
    @app.errorhandler(404)
    def not_found(error):
        return jsonify({
            "success": False,
            "error": 404,
            "message": "Resource Not Found"
        }), 404


    @app.errorhandler(400)
    def bad_request(error):
        return jsonify({
            "success": False,
            "error": 400,
            "message": "Bad Request"
        }), 400

    @app.errorhandler(500)
    def Internal_Server_Error(error):
        return jsonify({
            "success": False,
            "error": 500,
            "message": "Internal Server Error"
        }), 500

    '''
    TODO implement error handler for AuthError
        error handler should conform to general task above 
    '''
    @app.errorhandler(401)
    def Unauthorized_Error(error):
        return jsonify({
            "success": False,
            "error": 401,
            "message": "Unauthorized"
        }), 401

    return app