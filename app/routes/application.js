import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return Ember.RSVP.hash({
			book: $.getJSON('/books'),
			author: $.getJSON('/authors'),
			publisher: $.getJSON('/publishers')
		})
	}
});
