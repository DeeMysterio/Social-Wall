frappe.provide('social_wall.social');

import Home from './Home.vue';


social_wall.social.Home = class SocialHome {
	constructor({ parent }) {
		this.$parent = $(parent);
		this.page = parent.page;
		this.setup_header();
		this.make_body();
	}
	make_body() {
		this.$social_container = this.$parent.find('.layout-main');
		new Vue({
			el: this.$social_container[0],
			render: h => h(Home),
			data: {
				'page': this.page
			}
		});
	}
	setup_header() {
		this.page.set_title(__('Social'));
	}
};

social_wall.social.post_dialog = new frappe.ui.Dialog({
	title: __('Create Post'),
	fields: [
		{
			fieldtype: "Text Editor",
			fieldname: "content",
			label: __("Content"),
			reqd: 1
		}
	],
	primary_action_label: __('Post'),
	primary_action: (values) => {
		social_wall.social.post_dialog.disable_primary_action();
		const post = frappe.model.get_new_doc('Post');
		post.content = values.content;
		frappe.db.insert(post).then(() => {
			social_wall.social.post_dialog.clear();
			social_wall.social.post_dialog.hide();
		}).finally(() => {
			social_wall.social.post_dialog.enable_primary_action();
		});
	}
});

social_wall.social.is_home_page = () => {
	return frappe.get_route()[0] === 'social' && frappe.get_route()[1] === 'home';
};

social_wall.social.is_profile_page = (user) => {
	return frappe.get_route()[0] === 'social'
		&& frappe.get_route()[1] === 'profile'
		&& (user ? frappe.get_route()[2] === user : true);
};

social_wall.social.is_session_user_page = () => {
	return social_wall.social.is_profile_page() && frappe.get_route()[2] === frappe.session.user;
};

frappe.provide('frappe.app_updates');

frappe.utils.make_event_emitter(frappe.app_updates);
