"""Build a static web page for myself."""
import argparse
import json
import logging
import os

from config import Config
from flask import Flask, render_template, send_from_directory
from flask_frozen import Freezer

app = Flask(__name__)  # pylint: disable=invalid-name
app.config.from_object(Config)
app.logger.setLevel(logging.INFO)

STATIC_DIR = os.path.join(os.getcwd(), 'static')

@app.route("/")
def index():
    json_source = os.path.join(STATIC_DIR, "ben.json")
    with open(json_source) as ben_file:
        ben_json = ben_file.read()
    ben_data = json.loads(ben_json)
    return render_template('index.html', person=ben_data)


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("--local", "-l", action="store_true")
    return parser.parse_args()


def main():
    """Main control flow function."""
    args = parse_args()

    cwd = os.path.dirname(os.path.abspath(__file__))
    app.logger.info("Building the site in %s.", cwd)
    app.config['FREEZER_DESTINATION'] = cwd
    # Avoid a virtualenv bug.
    app.config['FREEZER_REMOVE_EXTRA_FILES'] = False
    if args.local:
        app.run()
    else:
        freezer = Freezer(app)
        freezer.freeze()


if __name__ == "__main__":
    main()
