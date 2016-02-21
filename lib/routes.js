FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/about', {
	name: 'about',
	action() {
		BlazeLayout.render('MainLayout', {main: 'About'});
	}
});

FlowRouter.route('/services', {
	name: 'services',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Services'});
	}
});


FlowRouter.route('/team', {
	name: 'team',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Team'});
	}
});


FlowRouter.route('/previous', {
	name: 'previous',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Previous'});
	}
});

FlowRouter.route('/contact', {
	name: 'contact',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Contact'});
	}
});