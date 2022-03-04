# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in social_wall/__init__.py
from social_wall import __version__ as version

setup(
	name="social_wall",
	version=version,
	description="app to hold Social Wall feature in ERPNext version-12",
	author="Diksha Ahire",
	author_email="dikshajadhav11.dj@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
