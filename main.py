import os

from google.appengine.dist import use_library
use_library('django', '1.2')

from google.appengine.api import users
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext.webapp import template

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


application = webapp.WSGIApplication([
    ('/', Main),
], debug=True)

def main():
    run_wsgi_app(application)

if __name__ == "__main__":
    main()

