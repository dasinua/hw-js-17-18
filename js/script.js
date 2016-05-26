$(function() {
	var html = $('#test').html();

	var articles = [
	 {
		title: 'Долженко Александр Сергеевич',
		paragraph: 'Cтудент GoFrontend Online',
		cause: 'Это востребованная профессия',
		phone: '+380508371979',
		links: 'img/dolzhenko.jpg'
	 },
	 {
		paragraph: 'Хочу учить фронтенд, потому что:',
		cause: 'Нравится создавать сайты',
		links: 'http://vk.com/dasfl'
	 },
	 {
		paragraph: 'Мой контактный телефон',
		cause: 'Можно работать в компании и на фрилансе.'
	 },
	 {
		paragraph: 'Мой профиль в контакте'
	 },
	 {
		paragraph: 'Мой фидбек:'
	 },
	 {
		paragraph: 'Делать, делать и еще раз делать!'
	 }

	];

	var content = tmpl(html, {
		data: articles
	});

	$('body').append(content);

});
