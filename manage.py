#!/usr/bin/python3
"""Convenience script for development."""

import subprocess
import sys

# Expect exactly one argument.
MODE = sys.argv[1]
COMMAND = "pipenv run python3 app.py"
OPTIONS = {"local": " --local", "build": ""}

COMMAND += OPTIONS[MODE]

subprocess.run(COMMAND, shell=True)
