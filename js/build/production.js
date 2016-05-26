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

(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Выяснить, мы получаем шаблон или нам нужно его загрузить
    // обязательно закешировать результат
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Сгенерировать (и закешировать) функцию,
      // которая будет служить генератором шаблонов
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Сделать данные доступными локально при помощи with(){}
        "with(obj){p.push('" +

        // Превратить шаблон в чистый JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // простейший карринг(термин функ. прог. - прим. пер.)
    // для пользователя
    return data ? fn( data ) : fn;
  };
})();
