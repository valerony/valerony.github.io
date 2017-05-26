// doc main-js

var MYAPP = (function($){
	var makeTextFromTemplate = function (TemplateTEXT, OBJ){ 
		var
			dataText = TemplateTEXT;

		for( key in OBJ ){

			var keyText$$ = key + '--temp'
			dataText = dataText.replace(keyText$$, OBJ[key])

		}
		return dataText
	}
	function renderProduct(data){
		$(data).each(function(i,e){
		dataProduct += makeTextFromTemplate(_product__templateID.html(), data[i]);
			dataProduct = dataProduct.replace('numberProduct--temp', i);
			
		})
		_product__list.append(dataProduct)
	}
	var
		_url = 'https://listatt.github.io/db/data.json',
		_product__templateID = $('#product__template'),
		_product__list = $('.product__list'),
		dataArray = [],
		dataProduct = '';

	function eventListener(){
		var
			product__add_basket = _product__list.find('.product__add-basket');

		product__add_basket.on('click',function(e){
			e.preventDefault();

			var
				$this = $(this)
				;
			if($this.hasClass('active')){
				console.log($(this).attr('data-number'))
				
			}else{
				$this.addClass('active');
			}
		})	

	};


		jQuery.ajax({
			url: _url,
			dataType: 'json',
	  		success: function(data){
	  			console.log('')
	  			dataArray = data;
	  			renderProduct(data);
	  			eventListener();
	  		},
	  		error: function(jqXHR, textStatus, errorThorwn){
	  			console.log(jqXHR)
	  		}
		})
		jQuery.ajax({
			url: _url,
			dataType: 'json',
	  		success: function(data){
	  			console.log('')
	  			dataArray = data;
	  			renderProduct(data);
	  			eventListener();
	  		},
	  		error: function(jqXHR, textStatus, errorThorwn){
	  			console.log(jqXHR)
	  		}
		})

		// var displayTweets = function () {
	 //    	$.ajax({
		//         cache: false,
		//         type: 'GET',
		//         crossDomain: true,
		//         url: _url,
		//         contentType: 'application/json; charset=utf-8',
		//         dataType: 'json',
		//         success: function (data) {
		//             console.log(data)
		//         },
		//   		error: function(jqXHR, textStatus, errorThorwn){
		//   			console.log('jqXHR')
		//   		}
	 //    	});
		// };
		// displayTweets()

})(jQuery)