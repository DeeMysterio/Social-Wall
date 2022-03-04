# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"module_name": 'Social Wall',
			"category": "Places",
			"label": _('My Social Wall'),
			"icon": "octicon octicon-heart",
			"type": 'link',
			"link": '#social/home',
			"color": '#FF4136',
			'standard': 1,
			'idx': 15,
			"description": "Your social wall."
		}
	]
