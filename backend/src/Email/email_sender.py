import smtplib
from email.message import EmailMessage
from flask import jsonify


# gmail_password = 'yq1000lm-gs1cL'
# gmail_password = 'jingpengli'

def get_credential(email_user):
    if email_user == 'liam.yun.wu@gmail.com':
        return {
            'user': email_user,
            'password': 'jingpengli'
        }
    return


# send_from = 'liam.yun.wu@gmail.com'  #should be Symple official email address
# password = 'jingpengli'
# to_email = '396679670@qq.com'


register_link_base = "https://symplenow.us.auth0.com/authorize?audience=symple&response_type=token&client_id=G9xC7ujs6leh6d6xn8jpWeTS0m4vyvXo&redirect_uri=http://localhost:4200/"

# def compose_email(sender_name, recipient_email,project_id, project_name):
#     register_link = register_link_base + '&project=' +project_id
#     email_title = sender_name + " wants to invite you to join project " + project_name +" !" 
#     message_body = register_link
#     msg = MIMEText(message_body)
#     msg['Subject'] = email_title
#     msg['From'] = send_from
#     msg['To'] = recipient_email
#     return msg


# def send_email(sender_name, recipient_email,project_id, project_name):
#     r = False
#     msg = compose_email(sender_name, recipient_email,project_id, project_name)

#     try:
#         server = smtplib.SMTP('smtp.gmail.com', 587)
#         # server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
#         server.ehlo()
#         server.starttls()
#         server.ehlo()
#         server.login(send_from,password)
#         msg = compose_email(sender_name, recipient_email, project_id, project_name)
#         server.sendmail(send_from,recipient_email,msg.as_string())
#         r = True
#     except Exception as e:
#         print(e)
#     finally:
#         server.close()
#         return r

def send_email(email_user, to, subject, body):
    credential = get_credential(email_user)

    if credential is None:
        return

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(credential['user'], credential['password'])

        msg = EmailMessage()
        msg['Subject'] = subject
        msg['From'] = email_user
        msg['To'] = to
        msg['Body'] = body


        server.sendmail(email_user, to, msg.as_string())

        return {
            'success': True,
            'from': credential['user'],
            'to': msg['to'],
            'msg': msg['subject']
        }
    except Exception as e:
        print(e)
        return {
            'success': False,
            'from': credential['user'],
            'to': msg['to'],
            'msg': msg['subject']
        }
    finally:
        server.close()



