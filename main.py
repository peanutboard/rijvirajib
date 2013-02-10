import os

from google.appengine.dist import use_library
use_library('django', '1.2')

from google.appengine.api import users
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext.webapp import template
from google.appengine.api import mail

class Main(webapp.RequestHandler):
    def get(self):
        self.template('index.html')

    def template(self, template_file, params = {}):
        path = os.path.join(os.path.dirname(__file__), 'templates', template_file)

        if users.get_current_user():
            params.update({
                'applications': App.all().filter('user', users.get_current_user()),
            })

        self.write(template.render(path, params))

    def write(self, d):
        self.response.out.write(d)

class Email(webapp.RequestHandler):
    def post(self):
        mail.send_mail(sender='kaila.hutchins@gmail.com',
            to='Kaila Hutchins <kaila.hutchins@gmail.com>',
            subject=self.request.get('subject'),
            body='From: ' + self.request.get('name') + '\nSubject: ' + self.request.get('subject') + '\nMessage: ' + self.request.get('message'))
        
        '''
        self.response.out.write('<html><body>You wrote:<pre>')
        self.response.out.write(self.request.get('message'))
        self.response.out.write('</pre></body></html>')
        '''
        self.response.out.write('OK')
        

application = webapp.WSGIApplication([
    ('/', Main),
    ('/contact', Email),
], debug=True)

def main():
    run_wsgi_app(application)

if __name__ == "__main__":
    main()

