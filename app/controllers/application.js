import Controller from '@ember/controller';

export default Controller.extend({
	firstName: "Shivam",
	lastName: "Sinha",
	fullName: Ember.computed('firstName','lastName',function(){
		return `${this.get('firstName')} ${this.get('lastName')}`; 
	}),
	otherName: Ember.computed.alias('fullName')
});
