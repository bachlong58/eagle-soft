DESTINATION = {
	addUrl : sz_PublicHost + 'did/destination/add',
	searchUrl : sz_PublicHost + 'did/destination/search',
	editUrl : sz_PublicHost + 'did/destination/edit',
	saveUrl : sz_PublicHost + 'did/destination/save',
	deleteUrl : sz_PublicHost + 'did/destination/delete',
	init : function(){		
		$('#add').click(function(){
			DESTINATION.add();
		});
		$('#search').click(function(e){
			DESTINATION.search();
		});
		
		$('#clear-form').click(function(){
			$('textarea').val('');
			$('select').val('');
			$('#active_1').attr('checked','checked');
		});
		DESTINATION.search();
		$('a.close, #close-popup').live('click', function() { 
			$('#fade , .popup_block').fadeOut(function() { 
			$('#fade, a.close').remove(); //fade them both out 
			}); 
			return false; 
		}); 
	},
	add: function(){
		var $dataRequest = $('#form-add').find('input, select, textarea').serializeArray();
		ajaxCore.ajaxGetJson(
				DESTINATION.addUrl,
			$dataRequest,
			function(response){
				if (response.sz_Message)	
				{
					alert(response.sz_Message);
					$('#clear-form').click();
					DESTINATION.search();
				}
			},
			function(response){
				if (response.sz_Message)
				{
					alert(response.sz_Message);
				}
			});
	},
	
	search: function(){
		var $dataRequest = $('.filterbox').find('input, select').serializeArray(); 
		ajaxCore.ajaxGetHtml(
				DESTINATION.searchUrl,
			$dataRequest,
			function(response){
				$('#list-view tbody').html(response);
			},
			function(response){
				alert('have error !')
			});
	},
	edit : function(the_i_Id)
	{
		ajaxCore.ajaxGetHtml(
				DESTINATION.editUrl,
				{'id': the_i_Id},
				function(response){
					if (response)	
					{
						popID = 'popup_block';
						$('#' + popID + ' .popup_content').html(response);
						$('#' + popID).fadeIn().css({ 'width': Number( 510 ) }).prepend('<a href="#" class="close"><img src="'+ sz_PublicHost +'images/dialog_close.png" class="btn_close" title="Close" alt="Close" /></a>');
						var popMargTop = ($('#' + popID).height() + 10) / 2; 
						var popMargLeft = ($('#' + popID).width() + 80) / 2; 
						//Apply Margin to Popup 
						$('#' + popID).css({ 
						'margin-top' : -popMargTop,
						'margin-left' : -popMargLeft 
						});
						$('body').append('<div id="fade"></div>');
						$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
					}
				},
				function(response){
					if (response.sz_Message)	
					{
						alert(response.sz_Message);
					}
				});
		return false;
	},
	save: function(){
		var $dataRequest = $('#form-edit').find('input, select, textarea').serializeArray(); 
		ajaxCore.ajaxGetJson(
				DESTINATION.saveUrl,
			$dataRequest,
			function(response){
				if (response.sz_Message)	
				{					
					$('#close-popup').click();
					alert(response.sz_Message);
					DESTINATION.search();
				}
			},
			function(response){
				if (response.sz_Message)	
				{
					alert(response.sz_Message);
				}
			});
	},
	delete : function(i)
	{
		ajaxCore.ajaxGetJson(
				DESTINATION.deleteUrl,
				{id : i},
				function(response){
					if (response.sz_Message)	
					{
						alert(response.sz_Message);
						DESTINATION.search();
					}
				},
				function(response){
					if (response.sz_Message)	
					{
						alert(response.sz_Message);
					}
				});
		
	}
}
$(document).ready(function() { 
	DESTINATION.init();
}); 